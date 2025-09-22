import * as z from "zod";
import type { SignupType } from "../schemas/signupSchema.js";

export function handleInputErros(errors: z.ZodError<SignupType>) {
  const formattedErrors = errors.issues.map((err) => err.message);
  return  formattedErrors;
}
