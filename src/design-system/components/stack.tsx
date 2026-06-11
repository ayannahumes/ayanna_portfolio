import * as React from "react";

import { cn } from "./utils";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

const stackGaps: Record<StackGap, string> = {
  xs: "gap-(--space-xs)",
  sm: "gap-(--space-sm)",
  md: "gap-(--space-md)",
  lg: "gap-(--space-lg)",
  xl: "gap-(--space-xl)",
  "2xl": "gap-(--space-2xl)",
  "3xl": "gap-(--space-3xl)",
};

function Stack({
  className,
  gap = "md",
  ...props
}: React.ComponentProps<"div"> & { gap?: StackGap }) {
  return (
    <div
      data-slot="stack"
      className={cn("flex flex-col", stackGaps[gap], className)}
      {...props}
    />
  );
}

export { Stack };
