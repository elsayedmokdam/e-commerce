"use client";

import { useMemo, useRef, useState } from "react";
import { FormField } from "../shared/app-form/app_form.interface";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";
import AppForm, { AppFormRef } from "../shared/app-form/AppForm";
import AppInput from "../shared/app-input/AppInput";
import { changePasswordAction } from "@/services/actions/change_password.action";
import { notify } from "@/services/utils/helpers/alerts";
import { $SCHEMAS_REPOSITORY } from "@/schemas/schemas.repo";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ChangePasswordForm() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const formRef = useRef<AppFormRef>(null);
  const route = useRouter();

  const passwordFormFields: FormField[] = useMemo(
    () => [
      {
        name: "currentPassword",
        type: "input",
        label: "Current Password*",
        placeholder: "*********",
        props: {
          type: showPassword1 ? "text" : "password",
          autoComplete: "current-password",
          className: "rounded-xl",
          icon: <FaLock className="size-4 text-gray-400" />,
          position: "start",
          endIcon: (
            <button
              type="button"
              onClick={() => setShowPassword1((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-slate-100"
            >
              {showPassword1 ? (
                <FaEyeSlash className="size-4 cursor-pointer" />
              ) : (
                <FaEye className="size-4 cursor-pointer" />
              )}
            </button>
          ),
          endIconClassName: "pr-0",
        },
      },
      {
        name: "password",
        type: "input",
        label: "New Password*",
        placeholder: "*********",
        props: {
          type: showPassword2 ? "text" : "password",
          autoComplete: "new-password",
          className: "rounded-xl",
          icon: <FaLock className="size-4 text-gray-400" />,
          position: "start",
          endIcon: (
            <button
              type="button"
              onClick={() => setShowPassword2((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-slate-100"
            >
              {showPassword2 ? (
                <FaEyeSlash className="size-4 cursor-pointer" />
              ) : (
                <FaEye className="size-4 cursor-pointer" />
              )}
            </button>
          ),
          endIconClassName: "pr-0",
        },
      },
      {
        name: "rePassword",
        type: "input",
        label: "Confirm Password*",
        placeholder: "*********",
        props: {
          type: showPassword3 ? "text" : "password",
          autoComplete: "new-password",
          className: "rounded-xl",
          icon: <FaLock className="size-4 text-gray-400" />,
          position: "start",
          endIcon: (
            <button
              type="button"
              onClick={() => setShowPassword3((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-slate-100"
            >
              {showPassword3 ? (
                <FaEyeSlash className="size-4 cursor-pointer" />
              ) : (
                <FaEye className="size-4 cursor-pointer" />
              )}
            </button>
          ),
          endIconClassName: "pr-0",
        },
      },
    ],
    [showPassword1, showPassword2, showPassword3],
  );

  const handleSavePassword = async (data: {
    currentPassword: string;
    password: string;
    rePassword: string;
  }) => {
    const response = await changePasswordAction(data);
    console.log(response);

    if (response.ok) {
      notify.success("Password updated successfully!");
      formRef.current?.reset();
      signOut({
        callbackUrl: "/signin", // Redirect to signin page after logout
        redirect: false,
      }).then(() => {
        route.push("/signin"); // Ensure client-side navigation to signin page
      });
      return;
    }
    notify.error(response.error?.data?.errors?.msg || response.error?.message);
  };
  return (
    <>
      <AppForm
        fields={passwordFormFields}
        components={{ input: AppInput }}
        onSubmit={handleSavePassword}
        buttonText="Save Changes"
        formClassName="space-y-5"
        layoutClassName="space-y-4"
        buttonClassName="bg-amber-600! text-white font-semibold px-6 py-6 rounded-xl w-full flex items-center justify-center gap-2 transition"
        ref={formRef}
        schema={$SCHEMAS_REPOSITORY.CHANGE_PASSWORD_FORM}
      />
    </>
  );
}
