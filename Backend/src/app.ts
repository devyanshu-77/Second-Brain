import express from "express";
const app = express();
import userRouter from "./routes/userRouter.js";

app.use(express.json());
app.use("/api/v1/users", userRouter);

export default app;
