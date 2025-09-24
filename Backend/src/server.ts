import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectDB } from "./config/db.js";
import logger from "./config/logger.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      logger.info(`Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    logger.error("Server error - ", error);
  }
}

startServer();
