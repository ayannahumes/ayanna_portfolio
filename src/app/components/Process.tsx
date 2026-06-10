import { Search, Cpu, Pen, Play, Rocket, BarChart2 } from "lucide-react";
import { cn } from "./ui/utils";

const steps = [
  {
    icon: Search,
    label: "Research",
    description:
      "User interviews, stakeholder mapping, competitive analysis, and heuristic evaluation to define the problem space.",
  },
  {
    icon: Cpu,
    label: "Systems Thinking",
    description:
      "Model the system: entities, relationships, states, and flows. Define tokens and primitives before components.",
  },
  {
    icon: Pen,
    label: "Design",
    description:
      "Figma-native prototyping using tokens and auto-layout. Iterate on hierarchy, density, and interaction models.",
  },
  {
    icon: Play,
    label: "Prototype",
    description:
      "React + TypeScript proof-of-concept. Validate interaction fidelity, edge cases, and accessibility early.",
  },
  {
    icon: Rocket,
    label: "Production",
    description:
      "Ship accessible, performant, testable components. Storybook docs, semantic HTML, and full keyboard support.",
  },
  {
    icon: BarChart2,
    label: "Measurement",
    description:
      "Track adoption metrics, accessibility audits, and developer satisfaction. Feed learnings back to Research.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-muted-foreground mb-3"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            How I Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-foreground tracking-tight"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              UX Engineering process.
            </h2>
            <p
              className="text-muted-foreground max-w-sm"
              style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
            >
              A repeatable, systems-oriented workflow from problem discovery to
              production measurement.
            </p>
          </div>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute top-[2.25rem] left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 4%, var(--border) 12%, var(--border) 88%, transparent 96%)",
              }}
            />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Icon node */}
                    <div className="relative z-10 mb-6">
                      <div className="size-[4.5rem] rounded-2xl bg-white border border-border flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.06)] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] group-hover:border-foreground/20 transition-all duration-200">
                        <Icon
                          size={22}
                          strokeWidth={1.75}
                          className="text-foreground"
                        />
                      </div>
                      {/* Step number */}
                      <div
                        className="absolute -top-1.5 -right-1.5 size-5 rounded-full bg-foreground text-white flex items-center justify-center"
                        style={{ fontSize: "0.625rem", fontWeight: 700 }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <p
                      className="text-foreground mb-2"
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.label}
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontSize: "0.8125rem", lineHeight: 1.65 }}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.label} className="flex gap-5">
                {/* Timeline column */}
                <div className="flex flex-col items-center">
                  <div className="size-11 rounded-xl bg-white border border-border flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.06)] shrink-0 relative">
                    <Icon
                      size={18}
                      strokeWidth={1.75}
                      className="text-foreground"
                    />
                    <div
                      className="absolute -top-1 -right-1 size-4 rounded-full bg-foreground text-white flex items-center justify-center"
                      style={{ fontSize: "0.5625rem", fontWeight: 700 }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 min-h-8 bg-border my-2" />
                  )}
                </div>

                {/* Content */}
                <div className={cn("pb-8 flex-1", isLast && "pb-0")}>
                  <p
                    className="text-foreground mb-1"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: "2.75rem",
                    }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: "0.9rem", lineHeight: 1.65 }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Principles strip */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Systems before screens.",
              body: "Design the model, not just the surface. Tokens, flows, and relationships come before pixels.",
            },
            {
              title: "Accessibility is not a phase.",
              body: "Keyboard nav, ARIA, and contrast are built in from the first prototype, not retrofitted at launch.",
            },
            {
              title: "Ship, measure, iterate.",
              body: "A shipped component with telemetry teaches more than a perfect design that never reached users.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-xl border border-border bg-white"
            >
              <p
                className="text-foreground mb-2"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </p>
              <p
                className="text-muted-foreground"
                style={{ fontSize: "0.875rem", lineHeight: 1.65 }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
