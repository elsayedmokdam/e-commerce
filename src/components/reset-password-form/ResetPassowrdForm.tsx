"use client";

import { FaLock } from "react-icons/fa";
import { FormField } from "../shared/app-form/app_form.interface";
import AuthResetLayout from "../shared/auth-reset-layout/AuthResetLayout";
import AppForm from "../shared/app-form/AppForm";
import AppInput from "../shared/app-input/AppInput";

export default function ResetPasswordForm({
  onSubmit,
}: {
  onSubmit: (data: any) => void;
}) {
  const fields: FormField[] = [
    {
      name: "email",
      type: "input",
      label: "Email",
      placeholder: "Enter Email",
      props: {
        type: "email",
        autoComplete: "new-password",
        className: "rounded-xl border-slate-200 focus:border-emerald-500",
        icon: <FaLock className="size-4 text-slate-400" />,
        position: "start",
      },
    },
    {
      name: "newPassword",
      type: "input",
      label: "New Password",
      placeholder: "Enter New Password",
      props: {
        type: "password",
        autoComplete: "new-password",
        className: "rounded-xl border-slate-200 focus:border-emerald-500",
        icon: <FaLock className="size-4 text-slate-400" />,
        position: "start",
      },
    },
  ];

  return (
    <AuthResetLayout
      step={3}
      title="Create New Password"
      subtitle="Your new password must be different from previous passwords"
    >
      <AppForm
        fields={fields}
        components={{ input: AppInput }}
        onSubmit={onSubmit}
        buttonText="Reset Password"
        formClassName="space-y-4"
        layoutClassName="space-y-4"
      />
    </AuthResetLayout>
  );
}
