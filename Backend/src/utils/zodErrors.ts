import * as z from "zod";

export function handleInputErros(errors: z.ZodError) {
  const formattedErrors = errors.issues.map((err) => err.message);
  return  formattedErrors;
}
