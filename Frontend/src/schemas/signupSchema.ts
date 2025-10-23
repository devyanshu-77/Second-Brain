import * as z from "zod";

const signupSchema = z.object({
  username: z
    .string()
    .trim()
    .refine((val) => !/\s/.test(val), {
      message: "Username cannot contain spaces",
    })
    .min(3, { message: "Username must be atleast 3 characters long" })
    .max(12, { message: "Username must not exceed 12 characters" }),
  password: z
    .string()
    .trim()
    .refine((val) => !/\s/.test(val), {
      message: "Passwrod cannot contain spaces",
    })
    .min(8, { message: "Password must be atleast 8 characters long" })
    .max(16, { message: "Passwrod must not exceed 16 characters" })
    .refine(
      (val) =>
        /[A-Z]/.test(val) && /[0-9]/.test(val) && /[^a-zA-Z0-9]/.test(val),
      {
        message:
          "Password must contain 1 uppercase, 1 number, 1 special character",
      }
    ),
});
export type SignupData = z.infer<typeof signupSchema>;
export default signupSchema;
