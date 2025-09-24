import userModel from "../models/userModel.js";
import { AppError } from "../errors/AppError.js";
export async function checkExistingUser(username: string) {
  try {
    const existingUser = await userModel.findOne({ username });
    return existingUser;
  } catch (error) {
    console.log("Error while checking existing user ", error);
    throw new Error("Something went wrong. Please try again later.");
  }
}
