import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-(--color-border-focus) focus-visible:ring-(--color-border-focus)/50 focus-visible:ring-[3px] aria-invalid:ring-(--color-feedback-error)/20 aria-invalid:border-(--color-feedback-error) transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-(--badge-default-background) text-(--badge-default-text) [a&]:hover:bg-(--color-action-primary)/90",
        secondary:
          "border-transparent bg-(--badge-secondary-background) text-(--badge-secondary-text) [a&]:hover:bg-(--color-action-secondary)/90",
        destructive:
          "border-transparent bg-(--badge-destructive-background) text-(--badge-destructive-text) [a&]:hover:bg-(--badge-destructive-background)/90 focus-visible:ring-(--badge-destructive-background)/20",
        outline:
          "text-(--color-text-primary) [a&]:hover:bg-(--color-action-secondary-hover) [a&]:hover:text-(--color-text-primary)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
