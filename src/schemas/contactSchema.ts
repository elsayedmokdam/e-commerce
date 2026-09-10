import { z } from "zod";

export const CONTACT_SCHEMA = z.object({
  name: z.string("Name is required").nonempty("Name is required").min(2, "Name must be at least 2 characters"),

  email: z.string("Email is required").nonempty("Email is required").email("Please enter a valid email address"),

  subject: z.string("Subject is required").nonempty("Subject is required").min(3, "Subject must be at least 3 characters"),

});
