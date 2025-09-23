import { Router } from "express";
const userRouter = Router();
import signupSchema from "../schemas/signupSchema.js";
import type { SignupType } from "../schemas/signupSchema.js";
import { handleInputErros } from "../utils/zodErrors.js";
import { checkExistingUser } from "../utils/checkExistingUser.js";
import { createUser } from "../utils/createUser.js";
import { generateToken } from "../utils/generateToken.js";
import { success } from "zod";

userRouter.post("/signup", async (req, res) => {
  try {
    const inputData: SignupType = req.body;
    if (!inputData || Object.keys(inputData).length === 0) {
      return res.status(400).json({
        success: false,
        message:
          "Request body is missing. Please provide username and password.",
        errors: null,
      });
    }
    const validationResults = signupSchema.safeParse(inputData);
    if (!validationResults.success) {
      const errors = validationResults.error;
      const formattedErrors = handleInputErros(errors);
      return res.status(422).json({
        success: false,
        message: "Invalid input",
        errors: formattedErrors,
      });
    }
    const { username, password } = validationResults.data;
    const existingUser = await checkExistingUser(username);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "The username is already taken please choose another one",
        errors: null,
      });
    }

    const newUser = await createUser({ username, password });
    const id = String(newUser.id);
    const token = generateToken(id);
    res.cookie("token", token);
    res.send(newUser);
  } catch (error) {
    console.log("Signup error ", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal server errror",
        errors: null,
      });
  }
});

export default userRouter;
