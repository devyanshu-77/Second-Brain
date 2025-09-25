import jwt from "jsonwebtoken";
const jwtSecret = String(process.env.JWT_SECRET);
import { AppError } from "../errors/AppError.js";
import logger from "../config/logger.js";

interface Payload {
  id: string;
  username: string;
}

export function generateToken(payload: Payload) {
  try {
    const token = jwt.sign(payload, jwtSecret);
    return token;
  } catch (error) {
    logger.error("Error while generating token ", error);
    throw new Error("Something went wrong. Please try again later.");
  }
}
