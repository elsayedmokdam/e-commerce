import { changePasswordSchemaValidation } from "./changePasswordSchema";
import { checkoutSchemaValidation } from "./checkoutSchema";
import { forgotPasswordSchemaValidation } from "./forgotPasswordSchema";
import { resetPasswordSchemaValidation } from "./resetPasswordSchema";
import { signinSchemaValidation } from "./signinSchema";
import { signupSchemaValidation } from "./signupSchema";
import { updateProfileSchemaValidation } from "./updateProfileSchema";
import { verifyResetCodeSchemaValidation } from "./verifyResetCodeSchema";

export const $SCHEMAS_REPOSITORY = {
  SIGNUP_FORM: signupSchemaValidation,
  SIGNIN_FORM: signinSchemaValidation,
  CHECKOUT_FORM: checkoutSchemaValidation,
  FORGOT_PASSWORD_FORM: forgotPasswordSchemaValidation,
  VERIFY_RESET_CODE_FORM: verifyResetCodeSchemaValidation,
  RESET_PASSWORD_FORM: resetPasswordSchemaValidation,
  UPDATE_PROFILE_FORM: updateProfileSchemaValidation,
  CHANGE_PASSWORD_FORM: changePasswordSchemaValidation,
} as const;
