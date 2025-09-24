import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import logger from "../config/logger.js";

const saltRounds = Number(process.env.HashRounds) || 10;

export async function hashPassword(password: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    logger.warn("Error while hashing password ", error);
    throw new Error("Something went wrong. Please try again later.");
  }
}
