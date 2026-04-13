"use server";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { SignupData } from "@/services/types/signup_interface";

export async function SignupUser(data: SignupData): Promise<string> {
  const { message } = await $SERVICE_REPOSITORY.Auth.signup(data);
  return message;
}
