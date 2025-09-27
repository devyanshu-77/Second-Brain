import type { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError.js";
import logger from "../config/logger.js";

export function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    logger.error("Major user side error - ", err)
    return res
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }
  logger.error("Major server side error - ", err)
  res.status(500).json({ success: false, message: "Internal server error" });
}
