import { Icon, type IconName } from "@/design-system/icons";

const links: {
  icon: IconName;
  label: string;
  handle: string;
  description: string;
  href: string;
}[] = [
  {
    icon: "github",
    label: "GitHub",
    handle: "@ayannahumes",
    description:
      "Open source work, component libraries, and personal projects.",
    href: "https://github.com/ayannahumes",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    handle: "Ayanna Humes",
    description:
      "Professional background, recommendations, and career history.",
    href: "https://www.linkedin.com/in/ayannahumes/",
  },
  {
    icon: "file-text",
    label: "Resume",
    handle: "ayanna-humes-resume.pdf",
    description: "Full work history, skills, and engineering background.",
    href: `${import.meta.env.BASE_URL}/ayanna-humes-resume.pdf`,
  },
  {
    icon: "mail",
    label: "Email",
    handle: "humes.ayanna@gmail.com",
    description: "Best for role inquiries, collaboration, and project work.",
    href: "mailto:humes.ayanna@gmail.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-(--color-text-muted) mb-3"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Contact
          </p>
          <h2
            className="text-(--color-text-primary) tracking-tight mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            Open to Senior UX Engineer, Design Engineer, and Design Systems
            roles.
          </h2>
          <p
            className="text-(--color-text-muted)"
            style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}
          >
            I'm actively exploring new opportunities. If you're building design
            systems, developer tooling, or product interfaces at scale — let's
            talk.
          </p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-start gap-5 p-6 rounded-xl border border-(--color-border-default) hover:border-(--color-text-primary)/20 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 bg-white"
              >
                <div className="size-10 rounded-lg bg-(--color-action-secondary) border border-(--color-border-default) flex items-center justify-center shrink-0 group-hover:bg-(--color-text-primary) group-hover:border-(--color-text-primary) group-hover:text-white transition-all duration-200">
                  <Icon name={link.icon} size="md" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p
                      className="text-(--color-text-primary)"
                      style={{ fontSize: "0.9375rem", fontWeight: 600 }}
                    >
                      {link.label}
                    </p>
                    <Icon
                      name="arrow-up-right"
                      size="sm"
                      className="text-(--color-text-muted) group-hover:text-(--color-text-primary) transition-colors shrink-0"
                    />
                  </div>
                  <p
                    className="text-(--color-text-muted) truncate mb-1"
                    style={{ fontSize: "0.8125rem", fontFamily: "monospace" }}
                  >
                    {link.handle}
                  </p>
                  <p
                    className="text-(--color-text-muted)"
                    style={{ fontSize: "0.8125rem", lineHeight: 1.55 }}
                  >
                    {link.description}
                  </p>
                </div>
              </a>
          ))}
        </div>

        {/* Footer rule */}
        <div className="mt-24 pt-8 border-t border-(--color-border-default) flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-(--color-text-muted)"
            style={{ fontSize: "0.8125rem" }}
          >
            Ayanna Humes · Senior UX Engineer
          </p>
          <p
            className="text-(--color-text-muted)"
            style={{ fontSize: "0.8125rem" }}
          >
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
