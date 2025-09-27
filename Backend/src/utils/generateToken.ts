import { config } from "dotenv";
config();
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
import logger from "../config/logger.js";

interface Payload {
  id: string;
  username: string;
}

export function generateToken(payload: Payload) {
  try {
    const token = jwt.sign(payload, JWT_SECRET!);
    logger.info("Generated token successfully");
    return token;
  } catch (error) {
    logger.error("Error while generating token ", error);
    throw new Error("Internal server error");
  }
}
