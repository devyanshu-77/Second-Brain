import * as z from "zod";

const signupSchema = z.object({
  username: z.string()
    .min(3, { message: "Username must contain atleast 3 chracters" })
    .max(12, { message: "Username must not exceed 12 characters" }),
  password: z.string()
    .min(8, { message: "Password must contain atleast 8 characters" })
    .max(16, { message: "Password must not exceed 16 characters" })
    .regex(/^(?=.*[A-z])(?=.*[a-z])(?=.*[0-9]).*$/, {
      message:
        "Password must include at least one uppercase letter, one lowercase letter, and one number",
    }),
});

export type SignupType = z.infer<typeof signupSchema>;
export default signupSchema;
