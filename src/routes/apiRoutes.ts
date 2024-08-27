import { Router } from "express";
import {
  sendFriendRequest,
  login,
  logOut,
  registration,
  cancelFriendRequest,
} from "../controllers/userController";
import {
  regValidationMiddleware,
  loginValidationMiddleware,
} from "../middlewares/validation";

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

export default apiRouter;
