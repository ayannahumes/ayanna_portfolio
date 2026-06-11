import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-(--color-border-default) placeholder:text-(--color-text-muted) focus-visible:border-(--color-border-focus) focus-visible:ring-(--color-border-focus)/50 aria-invalid:ring-(--color-feedback-error)/20 dark:aria-invalid:ring-(--color-feedback-error)/40 aria-invalid:border-(--color-feedback-error) dark:bg-(--color-background-muted)/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-(--color-background-muted) px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
