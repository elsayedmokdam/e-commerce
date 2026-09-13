"use client";
import AppButton from "../shared/app-button/AppButton";
import AppForm from "../shared/app-form/AppForm";
import {
  FaGithub,
  FaGoogle,
  FaLock,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import { FormField } from "../shared/app-form/app_form.interface";
import AppInput from "../shared/app-input/AppInput";
import { MdEmail } from "react-icons/md";
import { $SCHEMAS_REPOSITORY } from "@/schemas/schemas.repo";
import { SignupData } from "@/services/types/signup_interface";
import { SignupUserAction } from "../../services/actions/signup.action";
import { useRouter } from "next/navigation";
import { notify } from "@/services/utils/helpers/alerts";
import { signIn } from "next-auth/react";
import Link from "next/link";

const fields: FormField[] = [
  {
    name: "name",
    type: "input",
    label: "Name*",
    placeholder: "Sayed",
    props: {
      type: "text",
      autoComplete: "name",
      className: "rounded-xl",
      icon: <FaUser className="size-4 text-gray-400" />,
      position: "start",
    },
  },
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
      position: "start",
    },
  },
  {
    name: "password",
    type: "input",
    label: "Password*",
    placeholder: "create a strong password",
    props: {
      type: "password",
      autoComplete: "new-password",
      className: "rounded-xl",
      icon: <FaLock className="size-4 text-gray-400" />,
      position: "start",
    },
  },
  {
    name: "rePassword",
    type: "input",
    label: "Confirm Password*",
    placeholder: "confirm your password",
    props: {
      type: "password",
      autoComplete: "new-password",
      className: "rounded-xl",
      icon: <FaLock className="size-4 text-gray-400" />,
      position: "start",
    },
  },
  {
    name: "phone",
    type: "input",
    label: "Phone Number*",
    placeholder: "+1 234 567 8900",
    props: {
      type: "tel",
      autoComplete: "tel",
      className: "rounded-xl",
      icon: <FaPhone className="size-4 text-gray-400" />,
      position: "start",
    },
  },
];

const socialButtons = [
  {
    label: "Google",
    icon: <FaGoogle className="h-4 w-4 text-red-600" />,
  },
  {
    label: "Github",
    icon: <FaGithub className="h-4 w-4 text-blue-600  " />,
  },
];

export default function SignupForm() {
  const route = useRouter();
  async function onSubmit(data: SignupData) {
    try {
      await SignupUserAction(data);

      notify.success("Signup successful!");
      route.push("/signin");
    } catch (error: any) {
      notify.error(
        "Signup failed: an error occurred while signing up. Please check your credentials and try again.",
      );
    }
  }

  function handleSigninWithOAuth(provider: string) {
    console.log("Signing in with", provider);
    signIn(provider.toLowerCase(), { callbackUrl: "/" });
  }

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {socialButtons.map((button) => (
          <AppButton
            key={button.label}
            type="button"
            onClick={() => handleSigninWithOAuth(button.label)}
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
        buttonText="Sign Up"
        children={
          <div className="mt-5 text-sm text-slate-600">
            <label className="inline-flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 accent-main-color focus:ring-2 focus:ring-main-color"
              />
              <span>
                I agree to the{" "}
                <Link href="/terms" className="font-semibold text-main-color hover:text-green-700 hover:underline transition duration-200">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="font-semibold text-main-color hover:text-green-700 hover:underline transition duration-200">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>
        }
        schema={$SCHEMAS_REPOSITORY.SIGNUP_FORM}
      />
    </>
  );
}
