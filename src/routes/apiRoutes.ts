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

const apiRouter = Router();

// Register a new user
apiRouter.post("/api/user/register", regValidationMiddleware, registration);

// Log in the user
apiRouter.post("/api/user/login", loginValidationMiddleware, login);

// Log out the user
apiRouter.post("/api/user/logout", logOut);

// Send Friend Request
apiRouter.post("/api/friends/sendrequest", sendFriendRequest);

// Cancel Friend Request
apiRouter.post("/api/friends/canselrequest", cancelFriendRequest);

// Accept Friend Request
apiRouter.post("/api/friends/acceptrequest", acceptFriendRequest);

// get friendList
apiRouter.post("/api/friends/friendList", getFriendsList);

//UpdateRecivedNotification
apiRouter.post(
  "/api/friends/updaterecivednotification",
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
  "/api/friends/updatefriendsuggestions",
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

export default apiRouter;
