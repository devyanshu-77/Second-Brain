import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";
import { globalErrorHandler } from "./errors/errorHandler.js";
import morganMiddleware from "./middlewares/morganLogger.js";
import contentRouter from "./routes/contentRouter.js";

app.use(express.json());
app.use(cookieParser());
app.use(morganMiddleware);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/contents", contentRouter);

app.use(globalErrorHandler);

export default app;
