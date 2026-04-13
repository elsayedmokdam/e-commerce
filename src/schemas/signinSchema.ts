import * as zod from "zod";

export const signinSchemaValidation = zod
  .object({
    email: zod
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),

    password: zod
      .string()
      .min(1, "Password is required"),
  });
