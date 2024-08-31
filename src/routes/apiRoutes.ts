import { Router } from "express";
import {
  sendFriendRequest,
  login,
  logOut,
  registration,
  cancelFriendRequest,
  acceptFriendRequest,
  getFriendsList,
  getUserById,
} from "../controllers/userController";
import {
  regValidationMiddleware,
  loginValidationMiddleware,
} from "../middlewares/validation";
import Notification from "../models/notification";
import { Request, Response } from "express";
import User from "../models/user";
import Message from "../models/messages";
import Post from "../models/posts";

const apiRouter = Router();

// Register a new user
apiRouter.post(
  "/meetzone/api/user/register",
  regValidationMiddleware,
  registration
);

// Log in the user
apiRouter.post("/meetzone/api/user/login", loginValidationMiddleware, login);

// Log out the user
apiRouter.post("/api/user/logout", logOut);

// Send Friend Request
apiRouter.post("/meetzone/api/friends/sendrequest", sendFriendRequest);

// Cancel Friend Request
apiRouter.post("/meetzone/api/friends/canselrequest", cancelFriendRequest);

// Accept Friend Request
apiRouter.post("/meetzone/api/friends/acceptrequest", acceptFriendRequest);

// get friendList
apiRouter.post("/meetzone/api/friends/friendList", getFriendsList);

//UpdateRecivedNotification
apiRouter.post(
  "/meetzone/api/friends/updaterecivednotification",
  async (req: Request, res: Response) => {
    const userId = req.body.userId;

    try {
      const receivedNotifications = await Notification.find({
        "recipient.id": userId,
      }).lean();
      res.status(200).json({ receivedNotifications });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);

//Update Friends Sugguestions
apiRouter.post(
  "/meetzone/api/friends/updatefriendsuggestions",
  async (req: Request, res: Response) => {
    const userId = req.body.userId;

    const user = await getUserById(userId);

    try {
      const users = await User.find(
        { _id: { $ne: userId } },
        { username: 1, friends: 1 }
      )
        .sort({ _id: -1 })
        .limit(5)
        .lean(); // Using .lean() for better performance

      const frienSuggestions = users.filter((suggestionUser) => {
        // @ts-ignore
        return !user?.friends?.includes(suggestionUser._id);
      });

      res.status(200).json({ frienSuggestions });
    } catch (error) {
      console.log("ERRROR DURING FRIEND SUGGESTIONS", error);
      res.status(500).json({ error });
    }
  }
);

apiRouter.post(
  "/meetzone/api/friends/deletefriend",
  async (req: Request, res: Response) => {
    const { userId, friendId } = req.body;

    try {
      await User.updateOne({ _id: userId }, { $pull: { friends: friendId } });
      await User.updateOne({ _id: friendId }, { $pull: { friends: userId } });

      res.status(200).json({ message: "Friend deleted" });
    } catch (error) {
      console.log("ERRROR DURING FRIEND DELETE", error);
      res.status(500).json({ error });
    }
  }
);

// Get Chat Information
apiRouter.post(
  "/meetzone/api/chat/getchatinfo",
  async (req: Request, res: Response) => {
    const { userId, friendId } = req.body;

    try {
      const user = await getUserById(userId);
      const friend = await getUserById(friendId);

      const messages = await Message.find({
        $or: [
          { "sender.id": userId, "recipient.id": friendId },
          { "sender.id": friendId, "recipient.id": userId },
        ],
      }).sort({ timestamp: 1 });

      res.status(200).json({ user, friend, messages });
    } catch (error) {
      console.log("ERRROR DURING GET CHAT INFO", error);
      res.status(500).json({ error });
    }
  }
);

// Send Message
apiRouter.post(
  "/meetzone/api/chat/sendmessage",
  async (req: Request, res: Response) => {
    const { messageData } = req.body;

    try {
      Message.create(messageData);
      res.status(200).json({ message: "Message sent" });
    } catch (error) {
      console.log("ERRROR DURING SEND MESSAGE", error);
      res.status(500).json({ error });
    }
  }
);

// Upload Post
apiRouter.post(
  "/meetzone/api/post/upload",
  async (req: Request, res: Response) => {
    const { userId, post } = req.body;

    try {
      await Post.create({
        userId,
        post,
      });
      res.status(200).json({ message: "Post uploaded" });
    } catch (error) {
      console.log("ERRROR DURING UPLOAD POST", error);
      res.status(500).json({ error });
    }
  }
);

// Get Posts
apiRouter.post(
  "/meetzone/api/post/getposts",
  async (req: Request, res: Response) => {
    try {
      const posts = await (await Post.find().sort({ timestamp: 1 })).reverse();

      res.status(200).json({ posts });
    } catch (error) {
      console.log("ERRROR DURING GET POSTS", error);
      res.status(500).json({ error });
    }
  }
);

// Delete Account
apiRouter.post(
  "/meetzone/api/user/delete",
  async (req: Request, res: Response) => {
    const { userId } = req.body;

    try {
      await User.deleteOne({ _id: userId });
      await Post.deleteMany({ userId });
      await Message.deleteMany({
        $or: [{ "sender.id": userId }, { "recipient.id": userId }],
      });
      await Notification.deleteMany({
        $or: [{ "sender.id": userId }, { "recipient.id": userId }],
      });

      req.session.destroy(() => {
        res.clearCookie("sid").status(200).json({ message: "Account deleted" });
      });
    } catch (error) {
      console.log("ERRROR DURING DELETE ACCOUNT", error);
      res.status(500).json({ error });
    }
  }
);

export default apiRouter;
