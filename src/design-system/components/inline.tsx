import * as React from "react";

import { cn } from "./utils";

type InlineGap = "xs" | "sm" | "md" | "lg" | "xl";

const inlineGaps: Record<InlineGap, string> = {
  xs: "gap-(--space-xs)",
  sm: "gap-(--space-sm)",
  md: "gap-(--space-md)",
  lg: "gap-(--space-lg)",
  xl: "gap-(--space-xl)",
};

function Inline({
  className,
  gap = "sm",
  ...props
}: React.ComponentProps<"div"> & { gap?: InlineGap }) {
  return (
    <div
      data-slot="inline"
      className={cn("flex flex-wrap items-center", inlineGaps[gap], className)}
      {...props}
    />
  );
}

export { Inline };
