import * as React from "react";

import { cn } from "./utils";

function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header data-slot="section-header" className={cn("max-w-(--layout-content-default)", className)}>
      {eyebrow ? (
        <p className="mb-(--space-sm) text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-(--color-text-primary) text-[length:var(--text-style-h2-font-size)] font-(--text-style-h2-font-weight) leading-(--text-style-h2-line-height) tracking-(--text-style-h2-letter-spacing)">
        {title}
      </h2>
      {description ? (
        <p className="mt-(--space-md) text-(--color-text-secondary) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export { SectionHeader };
