"use server";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { SignupData } from "@/services/types/signup_interface";

export async function SignupUserAction(data: SignupData): Promise<string> {
  const response = await $SERVICE_REPOSITORY.Auth.signup(data);

  if (!response.ok) {
    throw new Error(response.error.message);
  }
  
  return response.data.message;
}
