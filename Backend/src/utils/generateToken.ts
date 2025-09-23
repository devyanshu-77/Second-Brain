import jwt from "jsonwebtoken";
import type { ObjectId } from "mongoose";
const jwtSecret = String(process.env.JWT_SECRET);

export function generateToken(id: string) {
  const token = jwt.sign({ id }, jwtSecret);
  return token;
}
