import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const handleLink = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Text content */}
          <div className="max-w-3xl">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white text-xs text-muted-foreground mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for new roles
            </div>

            <h1
              className="text-foreground mb-6 tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Building Design Systems, Developer Experiences, and
              Production-Ready Interfaces.
            </h1>

            <p
              className="text-muted-foreground mb-10 max-w-2xl"
              style={{ fontSize: "1.125rem", lineHeight: 1.6 }}
            >
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
                <ArrowRight size={16} />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => window.open(`${import.meta.env.BASE_URL}/ayanna-humes-resume-doc.pdf`, "_blank")}
              >
                <a href={`${import.meta.env.BASE_URL}/ayanna-humes-resume-doc.pdf`} download>
                  <Download size={16} />
                   Download Resume
                </a>
              </Button>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-10 border-t border-border">
              {[
                { label: "9+", sub: "Years Engineering" },
                { label: "3", sub: "Design Systems Built" },
                { label: "40+", sub: "Components Shipped" },
                { label: "3", sub: "Platforms (iOS, Web, DS)" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-foreground"
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-muted-foreground"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait placeholder */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div
              className="relative rounded-2xl overflow-hidden bg-secondary border border-border shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
              style={{ width: 300, height: 360 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}/ayanna-portrait.jpg`}
                alt="Ayanna Humes"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Decorative bottom band */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-secondary to-transparent" />
            </div>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "0.75rem" }}
            >
              Ayanna Humes · Senior UX Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <div
          className="w-px bg-border"
          style={{
            height: 40,
            background:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.15))",
          }}
        />
      </div>
    </section>
  );
}
