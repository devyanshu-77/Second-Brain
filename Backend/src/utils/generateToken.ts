import jwt from "jsonwebtoken";
const jwtSecret = String(process.env.JWT_SECRET);
import { AppError } from "../errors/AppError.js";

export function generateToken(id: string) {
  try {
    const token = jwt.sign({ id }, jwtSecret);
    return token;
  } catch (error) {
    console.log("Error while generating token ", error);
    throw new Error("Something went wrong. Please try again later.");
  }
}
