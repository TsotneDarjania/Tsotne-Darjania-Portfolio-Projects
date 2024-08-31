import { Request, Response, NextFunction } from "express";
import { SessionRequest } from "../controllers/userController";

export function isAuthenticated(req: Request) {
  const session = req.session as SessionRequest;

  if (session.userId) {
    return true;
  }

  return false;
}
