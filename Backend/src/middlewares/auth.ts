import { config } from "dotenv";
config();
import type { Request, Response, NextFunction } from "express";
import logger from "../config/logger.js";
import { AppError } from "../errors/AppError.js";
import jwt from "jsonwebtoken";
import { string, success } from "zod";

const JWT_SECRET = process.env.JWT_SECRET;

interface TokenPayload {
  id: string;
  username: string;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.token;
    console.log("JWT_SECRET - ", JWT_SECRET);
    if (!token) {
      logger.info("Didn't get token for verification");
      throw new AppError("Please login to continue", 401);
    }
    const decoded = jwt.verify(token, JWT_SECRET!) as {id: string, username: string};
    if (!decoded.id || !decoded.username) {
      return res
        .status(403)
        .json({ success: false, message: "Authentication failed" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof AppError) throw error;
    logger.error("Error while verify token error - ", error);
    throw new Error("Internal server error");
  }
}
