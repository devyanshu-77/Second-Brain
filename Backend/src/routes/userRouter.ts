import { Router } from "express";
const userRouter = Router();
import signupSchema from "../schemas/signupSchema.js";
import type { SignupType } from "../schemas/signupSchema.js";
import { handleInputErros } from "../utils/zodErrors.js";

userRouter.post("/signup", (req, res) => {
  const inputData: SignupType = req.body;
  if (!inputData || Object.keys(inputData).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Request body is missing. Please provide username and password.",
      errors: null,
    });
  }
  const validationResults = signupSchema.safeParse(inputData);
  if(!validationResults.success) {
    const errors = validationResults.error;
    const formattedErrors = handleInputErros(errors)
    return res.json({erros: formattedErrors})
  }
  res.send(inputData);
});

export default userRouter;
