import express from "express";
const app = express();
import userRouter from "./routes/userRouter.js";
import { globalErrorHandler } from "./errors/errorHandler.js";

app.use(express.json());
app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler);

export default app;
