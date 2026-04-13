import { signinSchemaValidation } from "./signinSchema";
import { signupSchemaValidation } from "./signupSchema";

export const $SCHEMAS_REPOSITORY = {
  SIGNUP_FORM: signupSchemaValidation,
  SIGNIN_FORM: signinSchemaValidation,
} as const;
