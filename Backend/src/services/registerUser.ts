import logger from "../config/logger.js";
import { AppError } from "../errors/AppError.js";
import userModel from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";
import { hashPassword } from "../utils/hashPassword.js";
import { findUser } from "./findUser.js";

interface UserInput {
  username: string;
  password: string;
}

export async function registerUser({ username, password }: UserInput) {
  try {
    const existingUser = await findUser(username);
    if (existingUser) {
      logger.warn(
        `Found existing user for the username - ${existingUser.username}`
      );
      throw new AppError("Username is already taken!", 409);
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await userModel.create({
      username,
      password: hashedPassword,
    });
    const payload = {
      id: String(newUser._id),
      username: newUser.username,
    };
    const token = generateToken(payload);
    return {
      user: {
        username: newUser.username,
        id: newUser._id,
      },
      token,
    };
  } catch (error) {
    logger.error(`Failed to register user - ${username}`)
    if (error instanceof AppError) {
      throw error;
    }
    throw new Error("Internal server error");
  }
}
