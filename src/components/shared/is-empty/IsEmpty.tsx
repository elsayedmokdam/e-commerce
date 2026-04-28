"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface IsEmptyProps {
  icon: string | React.ReactNode | any;
  title: string;
  description: string;
  links: {
    label: string;
    href: string;
  }[];
}

export default function IsEmpty({
  icon,
  title,
  description,
  links,
}: IsEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      {/* Icon */}
      <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6">
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
        ) : icon?.src ? (
          <Image src={icon} alt={title} width={48} height={48} />
        ) : (
          <div className="text-4xl">{icon}</div>
        )}
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold md:text-4xl italic text-gray-700 mb-3">{title}</h2>

      {/* Description */}
      <p className="text-gray-500 font-semibold mb-8 max-w-md lead">
        {description}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        {links.map((link, index) => (
          <Link
            key={link.label}
            href={link.href}
            className={`
              group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all
              ${
                index === 0
                  ? "bg-main-color text-white hover:bg-main-color/90 shadow-md"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            <span>{link.label}</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
