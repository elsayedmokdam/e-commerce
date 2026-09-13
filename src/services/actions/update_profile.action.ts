"use server";

import $SERVICE_REPOSITORY from "../service.repo";

export async function updateProfileAction(payload: {
  name: string;
  email: string;
  phone: string;
}) {
  const response: any = await $SERVICE_REPOSITORY.Users.updateMe(payload);
  return response;
}
