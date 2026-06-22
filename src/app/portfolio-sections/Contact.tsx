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
    handle: "ayanna-humes-resume-update.pdf",
    description: "Full work history, skills, and engineering background.",
    href: `${import.meta.env.BASE_URL}/ayanna-humes-resume-update.pdf`,
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
    <section id="contact" className="bg-(--color-background-page) py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-8">
          <p className="mb-3 text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
            Contact
          </p>
          <h1 className="mb-4 text-(--color-text-primary) text-[length:var(--text-style-h1-font-size)] font-(--text-style-h1-font-weight) leading-(--text-style-h1-line-height) tracking-(--text-style-h1-letter-spacing)">
            Open to UX Engineer, Design Engineer, and Design Systems roles.
          </h1>
          <p className="text-(--color-text-muted) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)">
            I'm actively exploring new opportunities. If you're building design
            systems, developer tooling, or product interfaces at scale, let's
            talk.
          </p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
            <a
              key={link.label}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-5 rounded-(--card-radius) border border-(--card-border) bg-(--card-background) p-(--card-content-spacing) transition-all duration-200 hover:border-(--color-action-primary)/20 hover:shadow-(--card-shadow) focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-(--color-border-focus)/50"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-(--button-shape-radius) border border-(--button-secondary-border) bg-(--button-secondary-background) text-(--button-secondary-text) transition-all duration-200 group-hover:border-(--button-default-border) group-hover:bg-(--button-default-background) group-hover:text-(--button-default-text)">
                <Icon name={link.icon} size="md" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-(--card-title-text) text-[length:var(--text-style-body-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-body-line-height)">
                    {link.label}
                  </p>
                  <Icon
                    name="arrow-up-right"
                    size="sm"
                    className="text-(--color-text-muted) group-hover:text-(--color-text-primary) transition-colors shrink-0"
                  />
                </div>
                <p className="mb-1 truncate text-(--card-description-text) text-[length:var(--text-style-mono-font-size)] font-(--text-style-mono-font-weight) leading-(--text-style-mono-line-height) tracking-(--text-style-mono-letter-spacing)">
                  {link.handle}
                </p>
                <p className="text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)">
                  {link.description}
                </p>
              </div>
              {isExternal && <span className="sr-only">(opens in a new tab)</span>}
            </a>
            );
          })}
        </div>

        {/* Footer rule */}
        <div className="mt-14 pt-6 border-t border-(--color-border-default) flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)">
            Ayanna Humes · UX Engineer
          </p>
          <p className="text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
