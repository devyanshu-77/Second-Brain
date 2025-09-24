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
      console.log(`DB connection error - ${error.message}`);
    } else {
      logger.error("DB connection failed error - ", error);
      console.log("DB connection error - unkown error ", error);
    }
  }
}
