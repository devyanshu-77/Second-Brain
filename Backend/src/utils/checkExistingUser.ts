import type mongoose from "mongoose";
import userModel from "../models/userModel.js";
export async function checkExistingUser(username: string) {
  try {
    const existingUser = await userModel.findOne({ username });
    return existingUser;
  } catch (error) {
    console.log("Error while checking existing user - ", error);
  }
}
