import { Badge } from "./ui/badge";

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
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-(--color-text-muted) mb-3"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            About
          </p>
          <h2
            className="text-(--color-text-primary) tracking-tight max-w-2xl"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            Engineering the layer between design and production.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
          {/* Bio */}
          <div>
            <div
              className="space-y-5 text-(--color-text-muted)"
              style={{ fontSize: "1rem", lineHeight: 1.75 }}
            >
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
                    <div className="size-1.5 rounded-full bg-white" />
                  </div>
                  <div>
                    <p
                      className="text-(--color-text-primary) mb-1"
                      style={{ fontSize: "0.9375rem", fontWeight: 600 }}
                    >
                      {h.label}
                    </p>
                    <p
                      className="text-(--color-text-muted)"
                      style={{ fontSize: "0.875rem", lineHeight: 1.65 }}
                    >
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <p
              className="text-(--color-text-primary) mb-6"
              style={{
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}
            >
              Core skills &amp; tools
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-3 py-1 rounded-full border-(--color-border-default) text-(--color-text-primary) bg-white hover:bg-(--color-action-secondary) transition-colors cursor-default"
                  style={{ fontSize: "0.8125rem", fontWeight: 500 }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Experience strip */}
            <div className="mt-12 p-6 rounded-xl border border-(--color-border-default) bg-(--color-action-secondary)">
              <p
                className="text-(--color-text-muted) mb-4"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
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
                      <p
                        className="text-(--color-text-primary)"
                        style={{ fontSize: "0.9375rem", fontWeight: 500 }}
                      >
                        {exp.role}
                      </p>
                      <p
                        className="text-(--color-text-muted)"
                        style={{ fontSize: "0.8125rem" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-(--color-text-muted) shrink-0"
                      style={{ fontSize: "0.8125rem" }}
                    >
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
