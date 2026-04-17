import Link from "next/link";
import React from "react";

export default function PageHeader({
  icon,
  title,
  pageName,
  subtitle,
  bgColor,
  iconBgColor,
}: {
  icon: string | React.ReactNode;
  title: string;
  pageName: string;
  subtitle: string;
  bgColor: string;
  iconBgColor: string;
}) {
  return (
    <div
      className={`min-h-30 flex flex-col justify-center gap-5 px-4 md:px-8 lg:px-15 xl:px-30 py-8 md:py-10 lg:py-12 ${bgColor}`}
    >
      <div className="nav-linls flex items-center font-medium">
        <Link className="text-gray-300 hover:text-white" href={"/"}>
          Home
        </Link>
        <span className="mx-2 text-gray-300">/</span>
        <h4 className="text-white">{pageName}</h4>
      </div>

      <div className="flex items-center gap-5">
        {/* Icon */}
        <div
          className={`size-17 rounded-2xl text-white text-3xl flex items-center justify-center shadow-lg border border-white/20 ${iconBgColor}`}
        >
          {typeof icon === "string" ? <img src={icon} alt={title} /> : icon}
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="text-gray-200">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
