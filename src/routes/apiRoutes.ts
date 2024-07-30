import { Router } from "express";
import { registration } from "../controllers/userController";
import validationMiddleware from "../middlewares/validation";

const apiRouter = Router();

// Register a new user
apiRouter.post("/api/users/register", validationMiddleware, registration);

export default apiRouter;
