import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-(--color-text-primary) placeholder:text-(--color-text-muted) selection:bg-(--color-action-primary) selection:text-(--color-text-inverse) dark:bg-(--color-background-muted)/30 border-(--color-border-default) flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-(--color-background-muted) transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-(--color-border-focus) focus-visible:ring-(--color-border-focus)/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-(--color-feedback-error)/20 dark:aria-invalid:ring-(--color-feedback-error)/40 aria-invalid:border-(--color-feedback-error)",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
