"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCartShopping } from "react-icons/fa6";

interface IsEmptyProps {
  icon: string | React.ReactNode | any;
  title: string;
  description: string;
  links: [
    {
      label: string;
      href: string;
    },
  ];
}

export default function IsEmpty({
  icon,
  title,
  description,
  links,
}: IsEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-6">
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="w-10 h-10" />
        ) : icon?.src ? (
          <Image src={icon} alt={title} width={40} height={40} />
        ) : (
          icon
        )}
      </div>

      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      <p className="text-gray-500 mb-6 max-w-md font-medium">{description}</p>

      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="group flex items-center gap-2 text-sm font-semibold px-6 py-3 bg-main-color text-white rounded-lg hover:bg-main-color/80 transition-colors"
        >
          <span>{link.label}</span>
          <span className="group-hover:translate-x-1 transition-transform">
            <FaArrowRight />
          </span>
        </Link>
      ))}
    </div>
  );
}
