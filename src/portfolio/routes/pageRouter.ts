import { Router } from "express";

const portfolioPageRouter = Router();

portfolioPageRouter.get("/", (req, res) => {
  res.render("portfolio/index");
});

export default portfolioPageRouter;
