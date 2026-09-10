import * as zod from "zod";

export const verifyResetCodeSchemaValidation = zod.object({
  resetCode: zod.string().min(1, "Code is required"),
});
