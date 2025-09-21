import app from "./app.js";

import { connectDB } from "./config/db.js";

async function startServer() {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log("Server is running on PORT: 3000");
    });
  } catch (error) {
    console.log("Server error - ", error);
  }
}

startServer();
