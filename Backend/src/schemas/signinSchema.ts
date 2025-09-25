import * as z from "zod";

const signinSchema = z.object({
  username: z
    .string()
    .trim()
    .refine((val) => !/\s/.test(val), {
      message: "Username must not contain spaces in between!",
    })
    .min(3, { message: "Username must contain atleast 3 chracters" })
    .max(12, { message: "Username must not exceed 12 characters" }),
  password: z
    .string()
    .trim()
    .refine((val) => !/\s/.test(val), {
      message: "Password must not contain spaces in between!",
    })
    .min(8, { message: "Password must contain atleast 8 characters" })
    .max(16, { message: "Password must not exceed 16 characters" })
    .refine(
      (val) =>
        /[A-Z]/.test(val) && /[0-9]/.test(val) && /[^a-zA-Z0-9]/.test(val),
      {
        message:
          "Password must contain one uppercase, one number and one special character",
      }
    ),
});

export default signinSchema;
