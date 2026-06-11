import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

interface CaseStudy {
  id: string;
  company: string;
  title: string;
  problem: string;
  contribution: string;
  focus: string[];
  impact: string;
  tags: string[];
  year: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "doordash",
    company: "DoorDash",
    title: "Affordability Platform",
    problem:
      "Teams struggled to understand why affordability experiences appeared or disappeared throughout the delivery pipeline. The platform's decision logic was opaque, making debugging slow and costly.",
    contribution:
      "Built a Generative UI prototype using React, TypeScript, and Next.js to visualize platform behavior and debugging workflows. Created interactive diagrams that surfaced decision trees in real time.",
    focus: [
      "Systems Thinking",
      "Developer Experience",
      "Platform Tooling",
      "UI Architecture",
    ],
    impact:
      "Improved visibility into platform decision-making and significantly reduced debugging complexity for engineering teams across the organization.",
    tags: ["React", "TypeScript", "Next.js", "Generative UI", "Platform"],
    year: "2024",
  },
  {
    id: "portfolio-ds",
    company: "Personal Project",
    title: "Portfolio Design System",
    problem:
      "Needed a scalable design foundation for a personal portfolio while maintaining rapid implementation speed and visual consistency across all surfaces.",
    contribution:
      "Created reusable design foundations, components, and implementation patterns in Figma and React. Established a token-based system covering color, typography, spacing, and motion.",
    focus: [
      "Design Tokens",
      "Component Architecture",
      "Accessibility",
      "Responsive Design",
    ],
    impact:
      "Enabled rapid development with consistent user experience. The system now powers this portfolio and serves as a living reference for design system patterns.",
    tags: ["Design Tokens", "Figma", "React", "Accessibility", "Storybook"],
    year: "2024",
  },
  {
    id: "component-deep-dive",
    company: "Personal Project",
    title: "Case Study Card Deep Dive",

    problem:
      "Needed a reusable component for presenting project work that could scale across multiple case studies while maintaining visual consistency, accessibility, and responsive behavior.",

    contribution:
      "Designed and implemented a reusable case study card from concept through production. Defined information hierarchy, interaction patterns, spacing rules, responsive layouts, and accessibility requirements before translating the component into React and Tailwind.",

    focus: [
      "Component Design",
      "Accessibility",
      "Responsive Layout",
      "Design-to-Code",
    ],

    impact:
      "Created a repeatable component pattern that standardized project presentation throughout the portfolio. The component now serves as a reference implementation for translating design decisions into production-ready code.",

    tags: [
      "Figma",
      "React",
      "TypeScript",
      "Tailwind",
      "Accessibility",
      "Component Architecture",
    ],

    year: "2026",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-(--color-action-secondary)">
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
            Featured Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-(--color-text-primary) tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              Case studies.
            </h2>
            <p
              className="text-(--color-text-muted) max-w-md"
              style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
            >
              Selected projects that demonstrate systems thinking, engineering
              depth, and design craft.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <Card
              key={cs.id}
              className="group bg-white border-(--color-border-default) hover:border-(--color-text-primary)/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden cursor-pointer gap-0"
            >
              {/* Top accent bar */}
              <div className="h-px bg-gradient-to-r from-(--color-text-primary)/10 via-(--color-text-primary)/20 to-(--color-text-primary)/10" />

              <CardHeader className="px-8 pt-8 pb-0 gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="text-(--color-text-muted) mb-1"
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {cs.company} · {cs.year}
                    </p>
                    <CardTitle
                      className="text-(--color-text-primary)"
                      style={{
                        fontSize: "1.375rem",
                        fontWeight: 700,
                        lineHeight: 1.25,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {cs.title}
                    </CardTitle>
                  </div>
                  <div className="size-8 rounded-full border border-(--color-border-default) flex items-center justify-center text-(--color-text-muted) group-hover:bg-(--color-text-primary) group-hover:text-white group-hover:border-(--color-text-primary) transition-all shrink-0 mt-0.5">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-8 pb-8 pt-6 flex flex-col gap-6">
                {/* Problem / Contribution / Impact */}
                <div className="space-y-4">
                  {[
                    { label: "Problem", text: cs.problem },
                    { label: "Contribution", text: cs.contribution },
                    { label: "Impact", text: cs.impact },
                  ].map((item) => (
                    <div key={item.label}>
                      <p
                        className="text-(--color-text-primary) mb-1"
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.label}
                      </p>
                      <CardDescription
                        style={{ fontSize: "0.9rem", lineHeight: 1.65 }}
                      >
                        {item.text}
                      </CardDescription>
                    </div>
                  ))}
                </div>

                {/* Focus areas */}
                <div>
                  <p
                    className="text-(--color-text-muted) mb-2.5"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Focus
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.focus.map((f) => (
                      <Badge
                        key={f}
                        variant="secondary"
                        className="rounded-full px-2.5 py-0.5 border-0 bg-(--color-action-secondary) text-(--color-text-primary)"
                        style={{ fontSize: "0.75rem", fontWeight: 500 }}
                      >
                        {f}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-(--color-border-default)">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-(--color-text-muted)"
                      style={{ fontSize: "0.75rem" }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
