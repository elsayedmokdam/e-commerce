import * as zod from "zod";

export const checkoutSchemaValidation = zod.object({
  city: zod.string("City name is required").nonempty("City name is required"),
  details: zod
    .string("Address Details is required")
    .nonempty("Address Details is required"),
  phone: zod.string("Phone number is required").nonempty("Phone number is required").regex(
    /^01[0125][0-9]{8}$/,
    "Please enter a valid Egyptian phone number",),
});
