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
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white"
    >
      <FiEye size={18} />
    </AppButton>
  );
}
