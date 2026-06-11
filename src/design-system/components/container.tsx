import * as React from "react";

import { cn } from "./utils";

type ContainerSize = "narrow" | "default" | "wide";

const containerSizes: Record<ContainerSize, string> = {
  narrow: "max-w-(--layout-content-narrow)",
  default: "max-w-(--layout-content-wide)",
  wide: "max-w-(--layout-container-xl)",
};

function Container({
  className,
  size = "wide",
  ...props
}: React.ComponentProps<"div"> & { size?: ContainerSize }) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full px-6 md:px-8", containerSizes[size], className)}
      {...props}
    />
  );
}

export { Container };
