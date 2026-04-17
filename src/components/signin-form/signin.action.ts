"use server";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { SigninData } from "@/services/types/signin_interface";

export async function SigninUserAction(data: SigninData): Promise<string> {
  const response = await $SERVICE_REPOSITORY.Auth.signin(data);
  
  if (!response.ok) {
    throw new Error(response.error.message);
  }

  return response.data.message;
}
