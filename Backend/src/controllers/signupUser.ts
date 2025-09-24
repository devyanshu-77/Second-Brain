import type { NextFunction, Request, Response } from "express";
import { registerUser } from "../services/registerUser.js";

export async function signupController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, password } = req.body;
    const { user, token } = await registerUser({ username, password });
    res.cookie("token", token);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
