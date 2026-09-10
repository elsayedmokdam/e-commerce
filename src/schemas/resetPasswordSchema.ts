import * as zod from "zod";

export const resetPasswordSchemaValidation = zod.object({
  email: zod
      .string("Email is required")
      .nonempty("Email is required")
      .email("Please enter a valid email"),
  newPassword: zod
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters"),
});
