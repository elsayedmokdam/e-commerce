import $SERVICE_REPOSITORY from "../service.repo";

export async function forgotPasswordAction(payload: any) {
    const response: any = await $SERVICE_REPOSITORY.Auth.forgotPasswords(payload);
    return response;
}

export async function verifyResetCodeAction(payload: any) {
    const response: any = await $SERVICE_REPOSITORY.Auth.verifyResetCode(payload);
    return response;
}

export async function resetPasswordAction(payload: any) {
    console.log(payload);
    const response: any = await $SERVICE_REPOSITORY.Auth.resetPassword(payload);
    return response;
}