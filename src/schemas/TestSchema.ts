import * as z from "zod";

export const TestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  bio: z.string().optional(),
  country: z.string().optional(),
});
