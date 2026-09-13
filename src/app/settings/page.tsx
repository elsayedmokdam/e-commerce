"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ChangePasswordForm from "@/components/change-password-form/ChangePasswordForm";
import PageHeader from "@/components/shared/page-header/PageHeader";
import UpdateProfileForm from "@/components/update-profile-form/UpdateProfileForm";
import {
  FaUser,
  FaLock,
  FaPalette,
  FaArrowLeft,
  FaChevronRight,
} from "react-icons/fa";
import Appearance from "@/components/appearance/Appearance";

export default function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
  // document.documentElement.classList.toggle("dark", theme === "dark");

  // localStorage.setItem("theme", theme);
}, [theme]);

  return (
    <>
      <PageHeader
        bgColor="bg-linear-to-r from-[#ec008c] via-[#ff4d4d] to-[#fc6767]"
        iconBgColor="from-[#ec008c] to-[#fc6767]"
        key={"settings"}
        icon={<FaUser />}
        title="Account Settings"
        pageName={[{ name: "Settings", href: "/settings" }]}
        subtitle="Manage your account settings and security."
      />

      <div className="min-h-screen bg-slate-50/50 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <aside className="md:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <h2 className="mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider px-3 pt-1">
                Account Settings
              </h2>

              <nav className="space-y-1">
                {/* Profile Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-all cursor-pointer ${
                    activeTab === "profile"
                      ? "bg-emerald-50 text-main-color font-semibold border border-emerald-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-8 items-center justify-center rounded-lg ${
                        activeTab === "profile"
                          ? "bg-emerald-100 text-main-color"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <FaUser className="size-3.5" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Profile Info</div>
                      <div className="text-[10px] text-slate-400 font-normal">
                        Update personal details
                      </div>
                    </div>
                  </div>
                  <FaChevronRight
                    className={`size-3 ${
                      activeTab === "profile"
                        ? "text-main-color"
                        : "text-slate-300"
                    }`}
                  />
                </button>

                {/* Password Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab("password")}
                  className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-all cursor-pointer ${
                    activeTab === "password"
                      ? "bg-amber-50 text-amber-700 font-semibold border border-amber-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-8 items-center justify-center rounded-lg ${
                        activeTab === "password"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <FaLock className="size-3.5" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Password</div>
                      <div className="text-[10px] text-slate-400 font-normal">
                        Change account password
                      </div>
                    </div>
                  </div>
                  <FaChevronRight
                    className={`size-3 ${
                      activeTab === "password"
                        ? "text-amber-600"
                        : "text-slate-300"
                    }`}
                  />
                </button>

                {/* Appearance Tab */}
                <button
                  type="button"
                  onClick={() => setActiveTab("appearance")}
                  className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-all cursor-pointer ${
                    activeTab === "appearance"
                      ? "bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-8 items-center justify-center rounded-lg ${
                        activeTab === "appearance"
                          ? "bg-indigo-100 text-indigo-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <FaPalette className="size-3.5" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Appearance</div>
                      <div className="text-[10px] text-slate-400 font-normal">
                        Light or dark mode
                      </div>
                    </div>
                  </div>
                  <FaChevronRight
                    className={`size-3 ${
                      activeTab === "appearance"
                        ? "text-indigo-600"
                        : "text-slate-300"
                    }`}
                  />
                </button>
              </nav>

              {/* Back to Home Link */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <Link
                  href="/"
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <FaArrowLeft className="size-3 text-slate-400" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="md:col-span-3">
            {/* Header Title */}
            <div className="mb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                {activeTab === "profile" && "Profile Information"}
                {activeTab === "password" && "Password & Security"}
                {activeTab === "appearance" && "Appearance & Theme"}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                {activeTab === "profile" &&
                  "Update your personal details and account info."}
                {activeTab === "password" &&
                  "Manage your password and secure your account."}
                {activeTab === "appearance" &&
                  "Customize how the app looks on your device."}
              </p>
            </div>

            {/* Tab Views */}
            <div className="space-y-6">
              {/* Profile Tab Content */}
              {activeTab === "profile" && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm animate-in fade-in duration-200">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-main-color">
                      <FaUser className="size-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        Profile Details
                      </h2>
                      <p className="text-xs text-slate-500">
                        Update your personal information
                      </p>
                    </div>
                  </div>
                  <UpdateProfileForm />
                </div>
              )}

              {/* Password Tab Content */}
              {activeTab === "password" && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm animate-in fade-in duration-200">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                      <FaLock className="size-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        Change Password
                      </h2>
                      <p className="text-xs text-slate-500">
                        Update your account password
                      </p>
                    </div>
                  </div>
                  <ChangePasswordForm />
                </div>
              )}

              {/* Appearance Tab Content */}
              {activeTab === "appearance" && (
                <Appearance setTheme={setTheme} theme={theme} />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
