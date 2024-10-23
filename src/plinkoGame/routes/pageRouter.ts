import { Router } from "express";

const plinkoPageRouter = Router();

plinkoPageRouter.get("/plinko-game", (req, res) => {
  res.render("plinkoGame/index");
});

export default plinkoPageRouter;
