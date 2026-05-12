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
    <section className="w-full flex items-center justify-center px-4 py-20 md:py-28">
      <div className="max-w-xl w-full flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-28 h-28 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shadow-sm mb-8">
          {typeof icon === "string" ? (
            // If it's a string, treat it as an image URL
            <img src={icon} alt={title} className="w-14 h-14 object-contain text-gray-500" />
            // If it's a imported image or a React component
          ) : icon?.src ? (
            <Image src={icon} alt={title} width={56} height={56} className="w-14 h-14 object-contain text-gray-500" />
            // Otherwise, render it directly (for React components or icons)
          ) : (
            <div className="text-5xl text-gray-500">{icon}</div>
          )}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mb-10">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`
                group flex items-center gap-2 rounded-xl px-6 py-3
                text-sm md:text-base font-semibold transition-all duration-300
                ${
                  index === 0
                    ? "bg-main-color text-white hover:scale-[1.03] hover:shadow-lg"
                    : "border border-gray-300 bg-white text-gray-700 hover:border-main-color hover:text-main-color"
                }
              `}
            >
              <span>{link.label}</span>

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
