import { Router, Request } from "express";
import { Session, SessionData } from "express-session";

const pageRouter = Router();

pageRouter.get("/", (req, res) => {
  res.render("homepage");
});

export default pageRouter;
