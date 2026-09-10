import * as zod from "zod";

export const forgotPasswordSchemaValidation = zod.object({
  email: zod
    .string("Email is required")
    .nonempty("Email is required")
    .email("Please enter a valid email"),
});
