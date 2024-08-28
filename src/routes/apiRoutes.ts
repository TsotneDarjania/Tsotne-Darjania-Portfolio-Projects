import { Router } from "express";
import {
  sendFriendRequest,
  login,
  logOut,
  registration,
  cancelFriendRequest,
  acceptFriendRequest,
  getFriendsList,
} from "../controllers/userController";
import {
  regValidationMiddleware,
  loginValidationMiddleware,
} from "../middlewares/validation";
import Notification from "../models/notification";
import { Request, Response } from "express";

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
      console.log("aq vaar");
      res.status(500).json({ error });
    }
  }
);

export default apiRouter;
