import userModel from "../models/userModel.js";
import { hashPassword } from "./hashPassword.js";

interface UserInput {
  username: string;
  password: string;
}

export async function createUser({ username, password }: UserInput) {
  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await userModel.create({
      username,
      password: hashedPassword,
    });
    return {
      username: newUser.username,
      id: newUser._id,
    };
  } catch (error) {
    console.log("Error while hashing password ", error)
    throw error
  }
}
