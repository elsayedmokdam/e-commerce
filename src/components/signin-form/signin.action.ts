"use server";
import $SERVICE_REPOSITORY from "@/services/service.repo";
import { SigninData } from "@/services/types/signin_interface";

export async function SigninUser(data: SigninData): Promise<string> {
  const { message } = await $SERVICE_REPOSITORY.Auth.signin(data);
  return message;
}
