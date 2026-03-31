import { Button } from "@/components/ui/button";
import React from "react";

export default function AppButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return <Button {...props}>{children}</Button>;
}
