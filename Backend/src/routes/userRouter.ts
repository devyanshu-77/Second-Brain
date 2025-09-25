import { Router } from "express";
const userRouter = Router();

import { signupController } from "../controllers/signupUser.js";
import { signinController } from "../controllers/signinUser.js";
import { validateInput } from "../middlewares/validateRequest.js";
import signupSchema from "../schemas/signupSchema.js";
import signinSchema from "../schemas/signinSchema.js";

userRouter.post("/signup", validateInput(signupSchema), signupController);
userRouter.post("/signin", validateInput(signinSchema), signinController);

export default userRouter;
