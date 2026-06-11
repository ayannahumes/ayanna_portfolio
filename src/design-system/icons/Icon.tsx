import type { SVGProps } from "react";

import { iconRegistry } from "./icon-registry";
import type { IconName, IconSize } from "./types";

const iconSizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

type IconProps = {
  name: IconName;
  size?: IconSize;
  className?: string;
  ariaLabel?: string;
} & Omit<SVGProps<SVGSVGElement>, "aria-label" | "role" | "width" | "height">;

// Icon abstracts the underlying icon library behind design-system names.
// Components get one consistent API for sizing and accessibility, while the
// registry can later point a name to a custom SVG without changing app code.
export function Icon({
  name,
  size = "md",
  className,
  ariaLabel,
  ...svgProps
}: IconProps) {
  const LucideIcon = iconRegistry[name];
  const accessibilityProps = ariaLabel
    ? { role: "img", "aria-label": ariaLabel }
    : { "aria-hidden": true };

  return (
    <LucideIcon
      className={className}
      size={iconSizeMap[size]}
      strokeWidth={1.75}
      {...svgProps}
      {...accessibilityProps}
    />
  );
}
