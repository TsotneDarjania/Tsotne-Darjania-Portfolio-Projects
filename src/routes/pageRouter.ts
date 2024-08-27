import { Router } from "express";
import { getUserById, SessionRequest } from "../controllers/userController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import User from "../models/user";
import Notification from "../models/notification";

const pageRouter = Router();

pageRouter.get("/", async (req, res) => {
  const session = req.session as SessionRequest;
  const user = await getUserById(session.userId!);

  // Fetch users excluding the current user and only selecting the username field
  const users = await User.find(
    { _id: { $ne: session.userId } },
    { username: 1 }
  )
    .limit(5)
    .lean(); // Using .lean() for better performance

  const sendNotifications = await Notification.find({
    sender: session.userId,
  }).lean();

  res.render("index", {
    authenticated: isAuthenticated(req),
    username: user?.username,
    userId: session.userId,
    friendsSuggestions: users,
    sendNotifications: sendNotifications,
  });
});

export default pageRouter;
