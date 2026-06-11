"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Icon } from "@/design-system/icons";

import { cn } from "@/design-system/components/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border bg-(--color-background-muted) data-[state=checked]:bg-(--color-action-primary) data-[state=checked]:text-(--color-text-inverse) data-[state=checked]:border-(--color-action-primary) focus-visible:border-(--color-border-focus) focus-visible:ring-(--color-border-focus)/50 aria-invalid:ring-(--color-feedback-error)/20 aria-invalid:border-(--color-feedback-error) size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <Icon name="check" className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
