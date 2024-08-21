import { Router } from "express";
import { login, logOut, registration } from "../controllers/userController";
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

export default apiRouter;
