import { Router } from "express";
import { getUserById, SessionRequest } from "../controllers/userController";
import { isAuthenticated } from "../middlewares/isAuthenticated";

const pageRouter = Router();

pageRouter.get("/", async (req, res) => {
  const session = req.session as SessionRequest;
  const user = await getUserById(session.userId!);

  res.render("index", {
    authenticated: isAuthenticated(req),
    username: user?.username,
  });
});

export default pageRouter;
