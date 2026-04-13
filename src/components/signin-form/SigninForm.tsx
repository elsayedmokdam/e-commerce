"use client";
import { useMemo, useState } from "react";
import AppButton from "../shared/app-button/AppButton";
import AppForm from "../shared/app-form/AppForm";
import {
  FaFacebookF,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaLock,
} from "react-icons/fa6";
import { FormField } from "../shared/app-form/app_form.interface";
import AppInput from "../shared/app-input/AppInput";
import { MdEmail } from "react-icons/md";
import { $SCHEMAS_REPOSITORY } from "@/schemas/schemas.repo";
import { SigninUser } from "./signin.action";
import { notify } from "@/utilities/alerts";
import { SigninData } from "@/services/types/signin_interface";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const socialButtons = [
  {
    label: "Google",
    icon: <FaGoogle className="h-4 w-4 text-red-600" />,
  },
  {
    label: "Facebook",
    icon: <FaFacebookF className="h-4 w-4 text-blue-600  " />,
  },
];

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const fields: FormField[] = useMemo(
    () => [
      {
        name: "email",
        type: "input",
        label: "Email*",
        placeholder: "sayed@example.com",
        props: {
          type: "email",
          autoComplete: "email",
          className: "rounded-xl",
          icon: <MdEmail className="size-4 text-gray-400" />,
          iconPosition: "start",
        },
      },
      {
        name: "password",
        type: "input",
        label: "Password*",
        placeholder: "Enter your password",
        props: {
          type: showPassword ? "text" : "password",
          autoComplete: "current-password",
          className: "rounded-xl",
          icon: <FaLock className="size-4 text-gray-400" />,
          position: "start",
          endIcon: (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-slate-100"
            >
              {showPassword ? (
                <FaEyeSlash className="size-4" />
              ) : (
                <FaEye className="size-4" />
              )}
            </button>
          ),
          endIconClassName: "pr-0",
        },
      },
    ],
    [showPassword],
  );

  async function onSubmit(data: SigninData) {
    /* try {
      const res = await signIn("credentials", {
        
      })
      notify.success("Signin successful!");
      router.push("/");
    } catch (error: any) {
      notify.error(
        "Incorrect email or password. Please check your credentials and try again.",
      );
    } */

    // Using NextAuth to handle signin with credentials provider
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      notify.error(
        "Incorrect email or password. Please check your credentials and try again.",
      );
      return;
    }

    notify.success("Signin successful!");
    router.push("/");
  }

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {socialButtons.map((button) => (
          <AppButton
            key={button.label}
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-sm text-gray-600 hover:bg-slate-50 transition duration-200 w-full py-5 rounded-xl"
          >
            {button.icon}
            {button.label}
          </AppButton>
        ))}
      </div>

      <p className="my-5 text-gray-500 dark:text-gray-400 transition-colors duration-300 text-center text-sm relative before:absolute before:left-0 before:top-1/2 before:w-[30%] before:h-px before:bg-linear-to-r before:from-transparent before:via-gray-300 before:to-transparent dark:before:bg-gray-600 before:rounded-4xl before:-translate-y-1/2 after:absolute after:right-0 after:top-1/2 after:w-[30%] after:h-px after:bg-linear-to-l after:from-transparent after:via-gray-300 after:to-transparent dark:after:bg-gray-600 after:-translate-y-1/2">
        or continue with email
      </p>

      <AppForm
        fields={fields}
        components={{ input: AppInput }}
        onSubmit={onSubmit}
        formClassName="space-y-4"
        layoutClassName="space-y-4"
        buttonText="Sign in"
        children={
          <div className="mt-5 text-sm text-gray-800">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 accent-main-color focus:ring-2 focus:ring-main-color"
              />
              keep Me Signin
            </label>
          </div>
        }
        schema={$SCHEMAS_REPOSITORY.SIGNIN_FORM}
      />
    </>
  );
}
