import { verifyResetCodeService } from "./verifyResetCode.service";
import { resetPasswordService } from "./resetPassword.service";
import { verifyTokenService } from "./verifyToken.service";
import { signupService } from "./signup.service";
import { signinService } from "./signin.service";
import { forgotPasswordsService } from "./forgotPasswords.service";
import { oauthSigninService } from "./oauthSignin.service";

export const AuthRepo = {
  verifyResetCode: verifyResetCodeService,
  resetPassword: resetPasswordService,
  verifyToken: verifyTokenService,
  signup: signupService,
  signin: signinService,
  forgotPasswords: forgotPasswordsService,
  oauthSignin: oauthSigninService,
};
