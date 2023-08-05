import * as z from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be 2 characters" }).max(50),
  email: z
    .string()
    .min(1, { message: "Email must be 2 characters" })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(8, { message: "Password must be 2 characters" })
    .max(50),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email must be 2 characters" })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(8, { message: "Password must be 2 characters" })
    .max(50),
});
