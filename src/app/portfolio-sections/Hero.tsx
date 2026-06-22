import { Icon } from "@/design-system/icons";
import { Button } from "@/design-system/components/button";

export function Hero() {
  const handleLink = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <section className="relative min-h-[64vh] flex flex-col justify-center pt-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none [background-image:var(--hero-background-grid-horizontal),var(--hero-background-grid-vertical)] [background-size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full py-12 md:py-16">
        <div className="grid grid-cols-1 gap-16 items-center">
          {/* Text content */}
          <div className="w-full">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-(--badge-shape-radius) border border-(--badge-outline-border) bg-(--badge-outline-background) text-(--badge-outline-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) mb-8 shadow-(--card-shadow)">
              <span className="size-1.5 rounded-full bg-(--color-feedback-success) animate-pulse" />
              Available for new roles
            </div>

            <h1 className="mb-6 text-(--color-text-primary) text-[length:var(--text-style-display-font-size)] font-(--text-style-display-font-weight) leading-(--text-style-display-line-height) tracking-(--text-style-display-letter-spacing)">
              Building Design Systems, Developer Experiences, and
              Production-Ready Interfaces.
            </h1>

            <p className="mb-10 text-(--color-text-muted) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)">
              UX Engineer with a background in mobile and web engineering,
              design systems, front-end architecture, and AI-assisted
              development workflows.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => handleLink("#case-studies")}
                className="gap-2"
              >
                View Case Studies
                <Icon name="arrow-right" size="sm" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() =>
                  window.open(
                    `${import.meta.env.BASE_URL}/ayanna-humes-resume-update.pdf`,
                    "_blank",
                  )
                }
              >
                <a
                  href={`${import.meta.env.BASE_URL}/ayanna-humes-resume-update.pdf`}
                  download
                >
                  <Icon name="download" size="sm" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-(--color-text-muted)">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-(--color-border-default)" />
      </div>
    </section>
  );
}
