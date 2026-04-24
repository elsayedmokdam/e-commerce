"use client";

import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  bgColor?: string;
  iconBg?: string;
}

export default function FeatureCard({
  icon,
  title,
  subtitle,
  bgColor = "bg-white",
  iconBg = "bg-gray-100",
}: FeatureCardProps) {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl shadow-sm border border-gray-200 ${bgColor} hover:shadow-md transition`}
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full ${iconBg}`}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
