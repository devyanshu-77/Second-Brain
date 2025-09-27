import type { NextFunction, Request, Response } from "express";
import { registerUser } from "../../services/registerUser.js";
import logger from "../../config/logger.js";
import { AppError } from "../../errors/AppError.js";

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
    logger.info(`New user signup User - ${user.username}`);
  } catch (error) {
    if (error instanceof AppError) {
      logger.info(`Error while registering user error - `, error);
    } else {
      logger.info(`Unknown error while registering user error -`, error);
    }
    next(error);
  }
}
