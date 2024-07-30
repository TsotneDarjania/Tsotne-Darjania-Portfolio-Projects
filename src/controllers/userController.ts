import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrtypt from "bcryptjs";
import { saveUser, users } from "../store/users";
import { SessionData } from "express-session";

interface SessionRequest extends SessionData {
  username?: string;
}

export async function registration(req: Request, res: Response) {
  const session = req.session as SessionRequest;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Save Session
  session.username = req.body.username;

  const { username, password } = req.body;
  const hasshedPassword = await bcrtypt.hash(password, 10);

  saveUser({ email: username, password: hasshedPassword });

  res.end("User registered successfully");
}
