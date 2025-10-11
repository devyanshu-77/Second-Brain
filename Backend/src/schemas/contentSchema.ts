import * as z from "zod";

const contentSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title length must contain 5 characters" })
    .max(25, { message: "Title length must not exceed 25 characters" }),
  link: z.string(),
  tags: z.string(),
  type: z.string(),
});

export default contentSchema;
