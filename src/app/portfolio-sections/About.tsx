import { Badge } from "@/design-system/components/badge";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const bio = [
  "Hi, I'm Ayanna, a UX Engineer working at the intersection of design craft, front-end engineering, and developer experience. At DoorDash I was a core architect on the cross-platform team that rebuilt a design system spanning iOS, Android, and web, growing adoption from 40% to 95%. Then I moved to the product side and shipped on top of what we built.",
  "That loop changed everything. I stopped assuming what “developer-friendly” meant and started building from lived experience.",
  "In 2022 I spoke at Figma Schema on building one design system across multiple teams, products, and native platforms without losing native-first principles. Design, code, and collaboration at scale. That's still the work I care most about.",
  "If you're building a team where design and engineering are genuine partners, I'd love to talk.",
];

const lenses = [
  {
    label: "The user",
    description: "The person experiencing the product.",
  },
  {
    label: "The designer",
    description: "The person expressing their intent.",
  },
  {
    label: "The engineer",
    description: "The person implementing it faithfully, and fast.",
  },
];

const skills = [
  "Design Systems",
  "UX Engineering",
  "Headless Component Architecture",
  "Design-to-Code Workflows",
  "Design Tokens",
  "Accessibility (WCAG)",
  "React",
  "TypeScript",
  "Next.js",
  "SwiftUI",
  "Kotlin Multiplatform",
  "Server-Driven UI",
  "Generative UI",
  "MCP Workflows",
  "AI-Assisted Development",
  "Figma",
  "Figma Code Connect",
  "Storybook",
  "CI/CD",
];

const experience = [
  {
    role: "Lead Frontend Engineer",
    company: "DoorDash · Affordability Platform",
    period: "2025 – 2026",
  },
  {
    role: "Design Systems Engineer",
    company: "DoorDash · Prism",
    period: "2021 – 2025",
  },
  {
    role: "Software Engineer 2",
    company: "Greenlight Financial Technology",
    period: "2020 – 2021",
  },
  {
    role: "iOS Developer",
    company: "Wunderman Thompson Mobile",
    period: "2016 – 2020",
  },
];

const talk = {
  src: "https://www.youtube.com/embed/jgueTz72ZMQ",
  title:
    "Ayanna Humes at Figma Schema 2022: Creating DoorDash's Native Mobile Design System",
};

const captionText =
  "text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase";
const bodyText =
  "text-(--color-text-secondary) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)";

export function About() {
  return (
    <section id="about" className="bg-(--color-background-page) py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-8">
          <p className={`mb-3 ${captionText}`}>About</p>
          <h1 className="max-w-4xl text-(--color-text-primary) text-[length:var(--text-style-h1-font-size)] font-(--text-style-h1-font-weight) leading-(--text-style-h1-line-height) tracking-(--text-style-h1-letter-spacing)">
            The best design systems don't just organize components. They change
            how teams think.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-12">
          {/* Bio + story */}
          <div>
            <div className="space-y-4">
              {bio.map((paragraph) => (
                <p key={paragraph} className={bodyText}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Triple lens */}
            <div className="mt-8">
              <p className={`mb-4 ${captionText}`}>
                I build with empathy for three people
              </p>
              <div className="space-y-5">
                {lenses.map((lens) => (
                  <div key={lens.label} className="flex gap-4">
                    <div className="mt-1 size-5 shrink-0 rounded-full bg-(--color-text-primary) flex items-center justify-center">
                      <div className="size-1.5 rounded-full bg-(--color-text-inverse)" />
                    </div>
                    <div>
                      <p className="mb-1 text-(--color-text-primary) text-[length:var(--text-style-body-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-body-line-height)">
                        {lens.label}
                      </p>
                      <p className="text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height)">
                        {lens.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={`${baseUrl}case-studies/prism-ios/design-engineers.jpeg`}
              alt="DoorDash design engineers team photo"
              className="mt-8 aspect-[16/9] w-full rounded-(--card-radius) border border-(--card-border) object-cover shadow-(--card-shadow)"
              loading="lazy"
            />
          </div>

          {/* Talk + skills + experience */}
          <div>
            {/* Figma Schema talk */}
            <div className="mb-8">
              <p className={`mb-3 ${captionText}`}>Figma Schema 2022 · Talk</p>
              <div className="aspect-video w-full overflow-hidden rounded-(--card-radius) border border-(--card-border) shadow-(--card-shadow)">
                <iframe
                  className="h-full w-full"
                  src={talk.src}
                  title={talk.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <p className={`mb-6 ${captionText}`}>Core skills &amp; tools</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="cursor-default rounded-(--badge-shape-radius) border-(--badge-outline-border) bg-(--badge-outline-background) px-(--badge-spacing-padding-x) py-(--badge-spacing-padding-y) text-(--badge-outline-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) hover:bg-(--button-outline-background-hover) transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Experience strip */}
            <div className="mt-8 rounded-(--card-radius) border-(length:--card-border-width) border-(--card-border) bg-(--card-background) p-(--card-content-spacing)">
              <p className="mb-4 text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
                Experience
              </p>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div
                    key={exp.company}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-(--card-title-text) text-[length:var(--text-style-body-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-body-line-height)">
                        {exp.role}
                      </p>
                      <p className="text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)">
                        {exp.company}
                      </p>
                    </div>
                    <span className="shrink-0 text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
