
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import {
  FaShieldAlt,
  FaLock,
  FaKey,
  FaCheck,
  FaArrowLeft,
} from "react-icons/fa";
import Image from "next/image";
import img from "@/images/forget-password.png";

interface StepIndicatorProps {
  currentStep: 1 | 2 | 3;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 my-6">
      {/* Step 1: Email */}
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition ${
          currentStep > 1
            ? "bg-main-color text-white"
            : currentStep === 1
              ? "bg-main-color text-white"
              : "bg-slate-100 text-slate-400"
        }`}
      >
        {currentStep > 1 ? (
          <FaCheck className="size-4" />
        ) : (
          <MdEmail className="size-4" />
        )}
      </div>

      <div
        className={`w-12 h-0.5 ${currentStep >= 2 ? "bg-main-color" : "bg-slate-200"}`}
      />

      {/* Step 2: Code */}
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition ${
          currentStep > 2
            ? "bg-main-color text-white"
            : currentStep === 2
              ? "bg-main-color text-white"
              : "bg-slate-100 text-slate-400"
        }`}
      >
        {currentStep > 2 ? (
          <FaCheck className="size-4" />
        ) : (
          <FaKey className="size-3.5" />
        )}
      </div>

      <div
        className={`w-12 h-0.5 ${currentStep >= 3 ? "bg-main-color" : "bg-slate-200"}`}
      />

      {/* Step 3: Password */}
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition ${
          currentStep === 3
            ? "bg-main-color text-white"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        <FaLock className="size-3.5" />
      </div>
    </div>
  );
};

interface AuthResetLayoutProps {
  step: 1 | 2 | 3;
  title: string;
  subtitle: string | React.ReactNode;
  children: React.ReactNode;
  backAction?: { label: string; onClick?: () => void; href?: string };
  footerText?: React.ReactNode;
}

export default function AuthResetLayout({
  step,
  title,
  subtitle,
  children,
  backAction,
  footerText,
}: AuthResetLayoutProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4 sm:p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side Banner */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center">
          <div className="w-full">
            <Image
              src={img}
              alt="FreshCart Logo"
              width={900}
              height={900}
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-8">
            Reset Your Password
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-sm">
            Don't worry, it happens to the best of us. We'll help you get back
            into your account in no time.
          </p>

          <div className="flex items-center gap-6 mt-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <MdEmail className="text-emerald-600 size-4" /> Email Verification
            </span>
            <span className="flex items-center gap-1.5">
              <FaShieldAlt className="text-emerald-600 size-3.5" /> Secure Reset
            </span>
            <span className="flex items-center gap-1.5">
              <FaLock className="text-emerald-600 size-3.5" /> Encrypted
            </span>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 w-full max-w-lg mx-auto">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-emerald-600 tracking-tight">
              Fresh<span className="text-slate-800">Cart</span>
            </h1>
            <h2 className="text-xl font-bold text-slate-800 mt-3">{title}</h2>
            <div className="text-sm text-slate-500 mt-1">{subtitle}</div>
          </div>

          {/* Stepper */}
          <StepIndicator currentStep={step} />

          {/* Form Content */}
          {children}

          {/* Back Action */}
          {backAction && (
            <div className="mt-4 text-center">
              {backAction.href ? (
                <Link
                  href={backAction.href}
                  className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-emerald-600 transition"
                >
                  <FaArrowLeft className="size-3" /> {backAction.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={backAction.onClick}
                  className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-emerald-600 transition"
                >
                  <FaArrowLeft className="size-3" /> {backAction.label}
                </button>
              )}
            </div>
          )}

          {/* Footer */}
          {footerText && (
            <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
              {footerText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
