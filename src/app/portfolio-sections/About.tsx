import { Badge } from "@/design-system/components/badge";

const skills = [
  "Design Systems",
  "UX Engineering",
  "Front-End Architecture",
  "Accessibility",
  "React",
  "TypeScript",
  "Figma",
  "AI-Assisted Development",
  "Next.js",
  "iOS / Swift",
  "Component Libraries",
  "Design Tokens",
  "Storybook",
  "Tailwind CSS",
  "Node.js",
  "Git / CI/CD",
];

const highlights = [
  {
    label: "Systems Thinker",
    description:
      "I build foundations — tokens, primitives, patterns — so teams ship faster with less inconsistency.",
  },
  {
    label: "Engineer + Designer",
    description:
      "Fluent in Figma and TypeScript. I close the gap between design intent and production reality.",
  },
  {
    label: "Accessibility First",
    description:
      "WCAG 2.1 AA compliance is a baseline. Semantic HTML, ARIA patterns, and keyboard nav are standard practice.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-(--color-background-page) py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-3 text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
            About
          </p>
          <h2 className="max-w-2xl text-(--color-text-primary) text-[length:var(--text-style-h1-font-size)] font-(--text-style-h1-font-weight) leading-(--text-style-h1-line-height) tracking-(--text-style-h1-letter-spacing)">
            Engineering the layer between design and production.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
          {/* Bio */}
          <div>
            <div className="space-y-5 text-(--color-text-muted) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)">
              <p>
                I'm a Senior UX Engineer specializing in design systems,
                component architecture, and developer experience. My background
                spans iOS engineering, front-end web development, and design —
                which means I think systemically about the whole stack, not just
                one layer.
              </p>
              <p>
                I've built and maintained production design systems used by
                cross-functional teams, developed Generative UI prototypes to
                debug platform behavior, and established accessibility-first
                engineering standards across multiple organizations.
              </p>
              <p>
                Whether I'm authoring Figma tokens, writing a React component
                library, or scaffolding a Next.js architecture, my goal is the
                same: reduce friction between design intent and shipped code.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 space-y-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex gap-4">
                  <div className="mt-1 size-5 shrink-0 rounded-full bg-(--color-text-primary) flex items-center justify-center">
                    <div className="size-1.5 rounded-full bg-(--color-text-inverse)" />
                  </div>
                  <div>
                    <p className="mb-1 text-(--color-text-primary) text-[length:var(--text-style-body-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-body-line-height)">
                      {h.label}
                    </p>
                    <p className="text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height)">
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="mb-6 text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
              Core skills &amp; tools
            </p>
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
            <div className="mt-12 rounded-(--card-radius) border-(length:--card-border-width) border-(--card-border) bg-(--card-background) p-(--card-content-spacing)">
              <p className="mb-4 text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
                Experience
              </p>
              <div className="space-y-4">
                {[
                  {
                    role: "Full-Stack Software Engineer",
                    company: "DoorDash",
                    period: "2025 – 2026",
                  },
                  {
                    role: "Design Systems Engineer",
                    company: "DoorDash",
                    period: "2021 – 2025",
                  },
                  {
                    role: "Software Engineer II",
                    company: "Greenlight Finacial Technology",
                    period: "2020 – 2021",
                  },
                  {
                    role: "iOS Engineer",
                    company: "Wunderman Thompson Mobile",
                    period: "2016 – 2020",
                  },
                ].map((exp) => (
                  <div
                    key={exp.role}
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
