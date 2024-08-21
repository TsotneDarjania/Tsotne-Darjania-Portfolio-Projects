import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { SessionData } from "express-session";
import User from "../models/user";

export interface SessionRequest extends SessionData {
  userId?: string;
}

export async function registration(req: Request, res: Response) {
  const session = req.session as SessionRequest;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, password } = req.body;

    console.log(password);

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create and save the new user
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    session.userId = user._id!.toString();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function login(req: Request, res: Response) {
  const session = req.session as SessionRequest;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid email or password" }] });
    }

    console.log("USer Passowrd Is " + user.password);
    console.log("Password is " + password);

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid email or password" }] });
    }

    session.userId = user._id!.toString();

    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

export function logOut(req: Request, res: Response) {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({
        message: "An error occurred while logging out",
      });
    } else {
      res.status(200).json({
        message: "User logged out successfully",
      });
    }
  });
}

export async function getUserById(userId: string) {
  return await User.findById(userId);
}
