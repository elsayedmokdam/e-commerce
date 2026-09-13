import * as zod from "zod";

export const changePasswordSchemaValidation = zod
  .object({
    currentPassword: zod
      .string("Current password is required")
      .nonempty("Current password is required"),

    password: zod
      .string("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])/,
        "Password must contain at least:\n• One uppercase letter\n• One lowercase letter\n• One number\n• One special character (@.#$!%*?&)",
      ),

    rePassword: zod
      .string("Confirm password is required")
      .nonempty("Confirm password is required"),
  })
  .refine(({ password, rePassword }) => password === rePassword, {
    error: "Confirm password does not match the New password",
    path: ["rePassword"],
  });
