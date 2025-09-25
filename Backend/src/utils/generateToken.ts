import { config } from "dotenv";
config();
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
import { AppError } from "../errors/AppError.js";
import logger from "../config/logger.js";

interface Payload {
  id: string;
  username: string;
}

export function generateToken(payload: Payload) {
  try {
    console.log("JWT_SE")
    const token = jwt.sign(payload, JWT_SECRET!);
    return token;
  } catch (error) {
    logger.error("Error while generating token ", error);
    throw new Error("Something went wrong. Please try again later.");
  }
}
