import { Icon } from "@/design-system/icons";
import { Badge } from "@/design-system/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/design-system/components/card";
import { designSystemCaseStudyLinks } from "@/app/features/case-studies/design-system/designSystemCaseStudy.data";
import { componentDeepDiveLinks } from "@/app/features/case-studies/component-deep-dive/componentDeepDive.data";

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
  const caseStudyLinks: Partial<Record<string, { href: string; label: string }>> = {
    "portfolio-ds": {
      href: designSystemCaseStudyLinks.caseStudy,
      label: "Read the Portfolio Design System case study",
    },
    "component-deep-dive": {
      href: componentDeepDiveLinks.caseStudy,
      label: "Read the Component Deep Dive case study",
    },
  };

  return (
    <section id="case-studies" className="bg-(--color-background-page) py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-3 text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
            Featured Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-(--color-text-primary) text-[length:var(--text-style-h1-font-size)] font-(--text-style-h1-font-weight) leading-(--text-style-h1-line-height) tracking-(--text-style-h1-letter-spacing)">
              Case studies.
            </h2>
            <p className="max-w-md text-(--color-text-muted) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)">
              Selected projects that demonstrate systems thinking, engineering
              depth, and design craft.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((cs) => {
            const card = (
              <Card className="group h-full cursor-pointer gap-0 overflow-hidden border-(length:--card-border-width) border-(--card-border) bg-(--card-background) transition-all duration-300 hover:border-(--color-text-primary)/20 hover:shadow-(--card-shadow)">
              {/* Top accent bar */}
              <div className="h-px bg-gradient-to-r from-(--color-text-primary)/10 via-(--color-text-primary)/20 to-(--color-text-primary)/10" />

              <CardHeader className="px-8 pt-8 pb-0 gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
                      {cs.company} · {cs.year}
                    </p>
                    <CardTitle className="text-(--card-title-text) text-[length:var(--text-style-h3-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-h3-line-height) tracking-(--text-style-h3-letter-spacing)">
                      {cs.title}
                    </CardTitle>
                  </div>
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-(--card-border) text-(--card-description-text) transition-all group-hover:border-(--color-action-primary) group-hover:bg-(--color-action-primary) group-hover:text-(--color-text-inverse)">
                    <Icon name="arrow-up-right" size="sm" />
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
                      <p className="mb-1 text-(--card-title-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
                        {item.label}
                      </p>
                      <CardDescription className="text-(--card-description-text) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)">
                        {item.text}
                      </CardDescription>
                    </div>
                  ))}
                </div>

                {/* Focus areas */}
                <div>
                  <p className="mb-2.5 text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
                    Focus
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.focus.map((f) => (
                      <Badge
                        key={f}
                        variant="secondary"
                        className="rounded-(--badge-shape-radius) border-0 bg-(--badge-secondary-background) px-(--badge-spacing-padding-x) py-(--badge-spacing-padding-y) text-(--badge-secondary-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight)"
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
                      className="text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            );

            const link = caseStudyLinks[cs.id];

            if (link) {
              return (
                <a
                  key={cs.id}
                  href={link.href}
                  className="block rounded-(--card-radius) focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-(--color-border-focus)/50"
                  aria-label={link.label}
                >
                  {card}
                </a>
              );
            }

            return <div key={cs.id}>{card}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
