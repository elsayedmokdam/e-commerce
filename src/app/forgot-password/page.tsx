"use client";

import ForgotPasswordForm from "@/components/forget-password-form/ForgetPasswordForm";
import ResetPasswordForm from "@/components/reset-password-form/ResetPassowrdForm";
import VerifyResetCodeForm from "@/components/verify-reset-code-form/VerifyResetCodeForm";
import {
  forgotPasswordAction,
  resetPasswordAction,
  verifyResetCodeAction,
} from "@/services/actions/forgot_password.action";
import { notify } from "@/services/utils/helpers/alerts";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSendCode = async (data: { email: string }) => {
    const response = await forgotPasswordAction(data);
    if (response.ok) {
      notify.success(response.data.message || "Code sent successfully");
      setEmail(data.email);
      setStep(2);
    } else {
      notify.error("Failed to send code");
      notify.error("Try again later");
    }
  };

  const handleVerifyCode = async (data: { resetCode: string }) => {
    const response = await verifyResetCodeAction(data.resetCode);
    if (response.ok) {
      notify.success(response.data.message || "Code verified successfully");
      setStep(3);
    } else {
      notify.error("Failed to verify code");
      notify.error("Try again later");
    }
  };

  const handleResetPassword = async (data: {
    email: string;
    newPassword: string;
  }) => {
    const response = await resetPasswordAction(data);
    if (response.ok) {
      notify.success(response.data.message || "Password reset successfully");
      router.push("/signin");
    } else {
      notify.error("Failed to reset password");
      notify.error("Try again later");
    }
  };

  return (
    <main>
      {step === 1 && <ForgotPasswordForm onSubmit={handleSendCode} />}

      {step === 2 && (
        <VerifyResetCodeForm
          email={email}
          onSubmit={handleVerifyCode}
          onResendCode={() => console.log("Resending code...")}
          onChangeEmail={() => setStep(1)}
        />
      )}

      {step === 3 && <ResetPasswordForm onSubmit={handleResetPassword} />}
    </main>
  );
}
