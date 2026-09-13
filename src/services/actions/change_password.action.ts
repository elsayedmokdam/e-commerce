"use server";

import $SERVICE_REPOSITORY from "../service.repo";

export async function changePasswordAction(payload: {
  currentPassword: string;
  password: string;
  rePassword: string;
}) {
  const response: any =
    await $SERVICE_REPOSITORY.Users.changeMyPassword(payload);
  return response;
}
