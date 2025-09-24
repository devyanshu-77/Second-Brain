import type { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError.js";
import { success } from "zod";

export function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Error - ", err);
  console.log("Error stack - ", err.stack);
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }
  res.status(500).json({ success: false, message: "Internal server error" });
}
