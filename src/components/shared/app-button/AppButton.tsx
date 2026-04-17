"use client";
import { Button } from "@/components/ui/button";
import React from "react";

interface AppButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean;
}

export default function AppButton({
  children,
  loading = false,
  ...props
}: AppButtonProps) {
  return (
    <Button {...props} disabled={loading} className={`flex items-center justify-center gap-2 ${props.className} ${loading ? "cursor-not-allowed! opacity-70" : "cursor-pointer"}`}>
      {children}
    </Button>
  );
}
