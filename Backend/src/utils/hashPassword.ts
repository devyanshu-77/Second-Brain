import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt"

const saltRounds = Number(process.env.HashRounds) || 10;

export async function hashPassword(password:string) {
  try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
  } catch (error) {
    console.log("Error while hashing password ", error)
  }
}