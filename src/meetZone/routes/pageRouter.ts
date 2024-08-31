import { Router } from "express";
import { getUserById, SessionRequest } from "../controllers/userController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import User from "../models/user";
import Notification from "../models/notification";

const meetZonePageRouter = Router();

meetZonePageRouter.get("/meetzone", async (req, res) => {
  const session = req.session as SessionRequest;
  const user = await getUserById(session.userId!);

  // Fetch users excluding the current user and only selecting the username field
  const users = await User.find(
    { _id: { $ne: session.userId } },
    { username: 1, friends: 1 }
  )
    .sort({ _id: -1 })
    .lean(); // Using .lean() for better performance

  const frienSuggestions = users.filter((suggestionUser) => {
    // @ts-ignore
    return !user?.friends?.includes(suggestionUser._id);
  });

  const sendedNotifications = await Notification.find({
    "sender.id": session.userId, // Use dot notation to access the nested field
  }).lean();

  const receivedNotifications = await Notification.find({
    "recipient.id": session.userId,
  }).lean();

  res.render("meetZone/index", {
    authenticated: isAuthenticated(req),
    username: user?.username,
    userId: session.userId,
    friendsSuggestions: frienSuggestions,
    sendedNotifications: sendedNotifications,
    receivedNotifications: receivedNotifications,
  });
});

export default meetZonePageRouter;
