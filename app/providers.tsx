"use client";

import { Toaster } from "sonner";

export function Providers() {
  return (
    <Toaster
      position="bottom-right"
      theme="system"
      richColors
      expand={true}
      closeButton
    />
  );
}
