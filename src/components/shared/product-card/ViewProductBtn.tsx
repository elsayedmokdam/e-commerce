"use client";

import { useRouter } from "next/navigation";
import { FiEye } from "react-icons/fi";
import AppButton from "../app-button/AppButton";

export default function ViewProductBtn({ id }: { id: string }) {
  const router = useRouter();

  return (
    <AppButton
      onClick={(e) => {
        e?.stopPropagation();
        router.push(`/products/${id}`);
      }}
      className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <FiEye size={18} className="text-gray-800" />
    </AppButton>
  );
}
