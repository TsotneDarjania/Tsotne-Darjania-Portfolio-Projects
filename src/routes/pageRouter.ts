import { Router } from "express";

const pageRouter = Router();

pageRouter.get("/", (req, res) => {
  res.render("homepage");
});

export default pageRouter;
