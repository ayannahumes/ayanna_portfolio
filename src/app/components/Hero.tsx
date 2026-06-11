import { Icon } from "@/design-system/icons";
import { Button } from "./ui/button";

export function Hero() {
  const handleLink = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none [background-image:var(--hero-background-grid-horizontal),var(--hero-background-grid-vertical)] [background-size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Text content */}
          <div className="max-w-3xl">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-(--badge-shape-radius) border border-(--badge-outline-border) bg-(--badge-outline-background) text-(--badge-outline-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) mb-8 shadow-(--card-shadow)">
              <span className="size-1.5 rounded-full bg-(--color-feedback-success) animate-pulse" />
              Available for new roles
            </div>

            <h1 className="mb-6 text-(--color-text-primary) text-[length:var(--text-style-display-font-size)] font-(--text-style-display-font-weight) leading-(--text-style-display-line-height) tracking-(--text-style-display-letter-spacing)">
              Building Design Systems, Developer Experiences, and
              Production-Ready Interfaces.
            </h1>

            <p className="mb-10 max-w-2xl text-(--color-text-muted) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)">
              Senior UX Engineer with a background in iOS engineering, design
              systems, front-end architecture, and AI-assisted development
              workflows.
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
                    `${import.meta.env.BASE_URL}/ayanna-humes-resume.pdf`,
                    "_blank",
                  )
                }
              >
                <a
                  href={`${import.meta.env.BASE_URL}/ayanna-humes-resume.pdf`}
                  download
                >
                  <Icon name="download" size="sm" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-10 border-t border-(--color-border-default)">
              {[
                { label: "9+", sub: "Years Engineering" },
                { label: "3", sub: "Design Systems Built" },
                { label: "40+", sub: "Components Shipped" },
                { label: "3", sub: "Platforms (iOS, Web, DS)" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-(--color-text-primary) text-[length:var(--text-style-h3-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-h3-line-height)"
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)"
                  >
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait placeholder */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="relative h-[360px] w-[300px] overflow-hidden rounded-(--card-radius) border border-(--card-border) bg-(--card-background) shadow-(--card-shadow)">
              <img
                src={`${import.meta.env.BASE_URL}/ayanna-portrait.jpg`}
                alt="Ayanna Humes"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Decorative bottom band */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-(--color-action-secondary) to-transparent" />
            </div>
            <p
              className="text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)"
            >
              Ayanna Humes · Senior UX Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-(--color-text-muted)">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-(--color-border-default)" />
      </div>
    </section>
  );
}
