import { config } from "dotenv";
config();
import type { Request, Response, NextFunction } from "express";
import logger from "../config/logger.js";
import { AppError } from "../errors/AppError.js";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET;

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies.token;
    if (!token) {
      logger.info("Didn't get token for verification");
      return res.status(401).json({
        success: false,
        message: "Please login to continue",
        errors: null,
      });
    }
    const decoded = jwt.verify(token, JWT_SECRET!) as {
      id: string;
      username: string;
    };
    if (!decoded.id || !decoded.username) {
      logger.warn("Didn't get token data after verifying");
      return res
        .status(401)
        .json({
          success: false,
          message: "Unauthorized please login to continue",
        });
    }
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof AppError) throw error;
    logger.error("Error while verify token error - ", error);
    throw new Error("Internal server error");
  }
}
