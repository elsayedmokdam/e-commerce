"use client";

import { FaShieldAlt } from "react-icons/fa";
import AuthResetLayout from "../shared/auth-reset-layout/AuthResetLayout";
import AppForm from "../shared/app-form/AppForm";
import AppInput from "../shared/app-input/AppInput";
import { FormField } from "../shared/app-form/app_form.interface";

interface VerifyResetCodeProps {
  email?: string;
  onSubmit: (data: any) => void;
  onResendCode?: () => void;
  onChangeEmail?: () => void;
}

export default function VerifyResetCodeForm({
  email = "elsayedmokdam@gmail.com",
  onSubmit,
  onResendCode,
  onChangeEmail,
}: VerifyResetCodeProps) {
  const fields: FormField[] = [
    {
      name: "resetCode",
      type: "input",
      label: "Verification Code",
      placeholder: "••••••",
      props: {
        type: "text",
        maxLength: 6,
        className:
          "rounded-xl tracking-widest text-center text-lg font-mono border-slate-200 focus:border-emerald-500",
        icon: <FaShieldAlt className="size-4 text-slate-400" />,
        position: "start",
      },
    },
  ];

  return (
    <AuthResetLayout
      step={2}
      title="Check Your Email"
      subtitle={`Enter the 6-digit code sent to ${email}`}
      backAction={{ label: "Change email address", onClick: onChangeEmail }}
    >
      <AppForm
        fields={fields}
        components={{ input: AppInput }}
        onSubmit={onSubmit}
        buttonText="Verify Code"
        formClassName="space-y-4"
      >
        <div className="text-center text-xs text-slate-500 mt-2">
          Didn't receive the code?{" "}
          <button
            type="button"
            onClick={onResendCode}
            className="font-semibold text-emerald-600 hover:underline"
          >
            Resend Code
          </button>
        </div>
      </AppForm>
    </AuthResetLayout>
  );
}
