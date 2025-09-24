import { Router } from "express";
const userRouter = Router();

import { signupController } from "../controllers/signupUser.js";
import { validateInput } from "../middlewares/validateRequest.js";
import signupSchema from "../schemas/signupSchema.js";

userRouter.post("/signup", validateInput(signupSchema), signupController);

export default userRouter;
