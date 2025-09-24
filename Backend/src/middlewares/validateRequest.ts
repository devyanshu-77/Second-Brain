import type { Request, Response, NextFunction } from "express";
import { handleInputErros } from "../utils/zodErrors.js";
import type { ZodType } from "zod";

export function validateInput(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validationResults = schema.safeParse(req.body);
    if (!validationResults.success) {
      const errors = validationResults.error;
      const formattedErrors = handleInputErros(errors);
      return res.status(422).json({
        success: false,
        message: "Invalid input",
        errors: formattedErrors,
      });
    }
    req.body = validationResults.data;
    next();
  };
}
