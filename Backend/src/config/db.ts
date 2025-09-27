import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import logger from "./logger.js";
const mongoUri = process.env.MONGO_URI;

export async function connectDB() {
  try {
    await mongoose.connect(`${mongoUri}SecondBrain`);
    logger.info("DB connection successfull");
  } catch (error) {
    if (error instanceof Error) {
      logger.error("DB connection failed error - ", error)
    } else {
      logger.error("DB connection failed unkown error - ", error);
    }
    process.exit(1)
  }
}
