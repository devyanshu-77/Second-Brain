import userModel from "../models/userModel.js";
import logger from "../config/logger.js";
import { AppError } from "../errors/AppError.js";

export async function checkExistingUser(username: string) {
  try {
    const existingUser = await userModel.findOne({ username });
    return existingUser;
  } catch (error) {
    logger.error("Error while checking existing user ", error);
    throw new AppError("Username or password incorrect", 401);
  }
}
