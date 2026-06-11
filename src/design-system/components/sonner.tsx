"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
        style={
          {
          "--normal-bg": "var(--color-background-elevated)",
          "--normal-text": "var(--color-text-primary)",
          "--normal-border": "var(--color-border-default)",
          } as React.CSSProperties
        }
      {...props}
    />
  );
};

export { Toaster };
