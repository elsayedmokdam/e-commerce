import * as zod from "zod";

export const updateProfileSchemaValidation = zod.object({
  name: zod.string("Name is required").min(3, "Name must be at least 3 characters"),
  email: zod.string("Email is required").email("Please enter a valid email"),
  phone: zod
    .string("Phone number required")
    .regex(/^01[0125][0-9]{8}$/, "Please enter a valid Egyptian phone number"),
});
