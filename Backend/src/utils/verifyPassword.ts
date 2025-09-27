import bcrypt from "bcrypt";
import logger from "../config/logger.js";
import { AppError } from "../errors/AppError.js";

export async function verifyPassword(password: string, hashedPassword: string) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    if (!match) {
      logger.info("Failed to verify password !");
      throw new AppError("Username or Password incorrect", 401);
    }
    logger.info("Verified password");
    return true;
  } catch (error) {
    if (error instanceof AppError) throw error;
    logger.error("Error while password verification error - ", error);
    throw new Error("Internal server error");
  }
}
