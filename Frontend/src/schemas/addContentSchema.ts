import * as z from "zod";

const addContentSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title length must contain 4 characters" })
    .max(25, { message: "Title length must not exceed 25 characters" }),
  link: z.string(),
  tag: z
    .string()
    .min(3, { message: "Tag must be atlest 3 characters long" })
    .max(12, { message: "Tag must not exceed 12 characters" }),
  type: z.string(),
});

export default addContentSchema;