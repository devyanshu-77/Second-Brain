import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const mongoUri = process.env.MONGO_URI;

export async function connectDB() {
  try {
    await mongoose.connect(`${mongoUri}SecondBrain`);
    console.log("DB connection successfull");
  } catch (error) {
    if (error instanceof Error) {
      console.log(`DB connection error - ${error.message}`);
    } else {
      console.log("DB connection error - unkown error ", error);
    }
  }
}
