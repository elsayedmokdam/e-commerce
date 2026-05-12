import { HttpResult } from "../utils/http";
import { SigninResponse } from "../types/signin_interface";
import { SignupResponse } from "../types/signup_interface";
import { signinService } from "./signin.service";
import { signupService } from "./signup.service";

export interface OAuthSigninData {
  provider: "google" | "github";
  accessToken: string;
  email: string;
  name: string;
}

const OAUTH_PASSWORD = "OAuth#Placeholder123";

export const oauthService = async (
  payload: OAuthSigninData,
): Promise<HttpResult<SigninResponse | SignupResponse>> => {
  // 1. Try signup first (new users)
  try {
    const signupResponse = await signupService({
      name: payload.name,
      email: payload.email,
      password: OAUTH_PASSWORD,
      rePassword: OAUTH_PASSWORD,
      phone: "",
    });

    // Only return if we actually got a token back
    if (signupResponse.ok && signupResponse.data?.token) {
      console.log("OAuth signup successful");
      return signupResponse;
    }
  } catch (error) {
    console.log("OAuth signup attempt failed:", error);
  }

  // 2. Fallback: signin (existing users)
  try {
    const signinResponse = await signinService({
      email: payload.email,
      password: OAUTH_PASSWORD,
    });

    if (signinResponse.ok && signinResponse.data?.token) {
      console.log("OAuth signin successful");
      return signinResponse;
    }
  } catch (error) {
    console.log("OAuth signin attempt failed:", error);
  }

  // 3. Both failed
  return {
    ok: false,
    error: {
      message: "Failed to authenticate with OAuth provider",
    },
  } as any;
};
