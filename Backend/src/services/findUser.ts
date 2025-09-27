import userModel from "../models/userModel.js";
import logger from "../config/logger.js";
import { AppError } from "../errors/AppError.js";
import type { UserDocument } from "../models/userModel.js";

export async function findUser(username: string): Promise<UserDocument | null> {
  try {
    const existingUser = await userModel.findOne({ username });
    logger.info(`Found existing user - ${existingUser?.username}`);
    return existingUser;
  } catch (error) {
    logger.error("Error while checking existing user ", error);
    throw new Error("Internal server error");
  }
}
