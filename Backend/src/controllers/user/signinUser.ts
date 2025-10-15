import type { Request, Response, NextFunction } from "express";
import { findUser } from "../../services/findUser.js";
import { verifyPassword } from "../../utils/verifyPassword.js";
import { AppError } from "../../errors/AppError.js";
import { generateToken } from "../../utils/generateToken.js";
import logger from "../../config/logger.js";

export async function signinController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, password } = req.body;
    const user = await findUser(username);
    if (!user) {
      return next(new AppError("Username or password incorrect", 401));
    }
    await verifyPassword(password, user.password);
    const payload = {
      id: String(user._id),
      username: user.username,
    };
    const token = generateToken(payload);
    res.cookie("token", token);
    res.status(200).json({
      success: true,
      message: "Sign in successful",
      data: {
        user: {
          id: user._id,
          username: user.username,
        },
      },
    });
  } catch (err) {
    logger.error("Error while user signin error - ", err);
    next(err instanceof AppError ? err : new Error("Internal server errror"));
  }
}
