import * as zod from "zod";

export const signupSchemaValidation = zod
  .object({
    name: zod
      .string("Name is required")
      .nonempty("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be less than 20 characters")
      .regex(/^[a-zA-Z][a-zA-Z ]{2,20}$/, "Please enter a valid username"),

    email: zod
      .email("Email is required")
      .nonempty("Email is required")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email",
      ),

    password: zod
      .string("Password is required")
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be less than 20 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),

    rePassword: zod.string().nonempty("Confirm password is required"),

    phone: zod
      .string("Phone number required")
      .nonempty("Phone number is required")
      .regex(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "Please enter a valid phone number",
      ),
  })
  .refine(({ password, rePassword }) => password === rePassword, {
    error: "Confirm password does not match the password",
    path: ["rePassword"],
  });
