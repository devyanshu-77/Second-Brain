import logger from "../config/logger.js";
import { AppError } from "../errors/AppError.js";
import userModel from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";
import { hashPassword } from "../utils/hashPassword.js";
import { checkExistingUser } from "./checkExistingUser.js";

interface UserInput {
  username: string;
  password: string;
}

export async function registerUser({ username, password }: UserInput) {
  try {
    const existingUser = await checkExistingUser(username);
    if (existingUser) {
      logger.warn(
        `Found existing user for the username - ${existingUser.username}`
      );
      throw new AppError("User already exists!", 409);
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await userModel.create({
      username,
      password: hashedPassword,
    });
    const id = String(newUser._id);
    const token = generateToken(id);
    return {
      user: {
        username: newUser.username,
        id: newUser._id,
      },
      token,
    };
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new Error("Failed to register user. Please try again later.");
  }
}
