"use client";

import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaCheckCircle, FaPalette } from "react-icons/fa";

interface AppearanceProps {
  theme?: string;
  setTheme?: (theme: string) => void;
}

export default function Appearance({
  theme: externalTheme,
  setTheme: externalSetTheme,
}: AppearanceProps) {
  const { theme: contextTheme, setTheme: contextSetTheme } = useTheme();

  const currentTheme = externalTheme ?? contextTheme ?? "light";

  const handleThemeChange = (newTheme: string) => {
    (externalSetTheme ?? contextSetTheme)(newTheme);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
      {/* Header Section */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
          <FaPalette className="size-5" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-card-foreground">
            Appearance & Theme
          </h2>
          <p className="text-xs text-muted-foreground">
            Customize how the application looks on your device
          </p>
        </div>
      </div>

      {/* Theme Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Light Mode Card */}
        <button
          type="button"
          onClick={() => handleThemeChange("light")}
          className={`group relative w-full text-left rounded-xl p-4 transition-all duration-200 border cursor-pointer ${
            currentTheme === "light"
              ? "border-indigo-600 ring-2 ring-indigo-500/20 bg-indigo-50/20"
              : "border-border bg-card hover:border-ring"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-500">
                <FaSun className="size-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-card-foreground">
                  Light Mode
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Default bright theme
                </p>
              </div>
            </div>

            {currentTheme === "light" && (
              <FaCheckCircle className="size-5 text-indigo-600" />
            )}
          </div>

          {/* Light Theme Preview UI */}
          <div className="space-y-2 rounded-xl border border-border bg-muted p-3.5">
            <div className="h-2.5 w-3/5 rounded-md bg-foreground" />
            <div className="h-2 w-4/5 rounded-md bg-muted-foreground/40" />
          </div>
        </button>

        {/* Dark Mode Card */}
        <button
          type="button"
          onClick={() => handleThemeChange("dark")}
          className={`group relative w-full text-left rounded-xl p-4 transition-all duration-200 border cursor-pointer ${
            currentTheme === "dark"
              ? "border-indigo-600 ring-2 ring-indigo-500/20 bg-indigo-50/20"
              : "border-border bg-card hover:border-ring"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <FaMoon className="size-4" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-card-foreground">
                  Dark Mode
                </h3>
                <p className="text-[11px] text-muted-foreground">Easy on the eyes</p>
              </div>
            </div>

            {currentTheme === "dark" && (
              <FaCheckCircle className="size-5 text-indigo-600" />
            )}
          </div>

          {/* Dark Theme Preview UI */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5 space-y-2">
            <div className="h-2.5 w-3/5 rounded-md bg-slate-200" />
            <div className="h-2 w-4/5 rounded-md bg-slate-700" />
          </div>
        </button>
      </div>
    </div>
  );
}
