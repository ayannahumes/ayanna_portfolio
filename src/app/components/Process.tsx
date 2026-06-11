import { Icon, type IconName } from "@/design-system/icons";
import { cn } from "./ui/utils";

const steps: {
  icon: IconName;
  label: string;
  description: string;
}[] = [
  {
    icon: "search",
    label: "Research",
    description:
      "User interviews, stakeholder mapping, competitive analysis, and heuristic evaluation to define the problem space.",
  },
  {
    icon: "cpu",
    label: "Systems Thinking",
    description:
      "Model the system: entities, relationships, states, and flows. Define tokens and primitives before components.",
  },
  {
    icon: "pen",
    label: "Design",
    description:
      "Figma-native prototyping using tokens and auto-layout. Iterate on hierarchy, density, and interaction models.",
  },
  {
    icon: "play",
    label: "Prototype",
    description:
      "React + TypeScript proof-of-concept. Validate interaction fidelity, edge cases, and accessibility early.",
  },
  {
    icon: "rocket",
    label: "Production",
    description:
      "Ship accessible, performant, testable components. Storybook docs, semantic HTML, and full keyboard support.",
  },
  {
    icon: "bar-chart-2",
    label: "Measurement",
    description:
      "Track adoption metrics, accessibility audits, and developer satisfaction. Feed learnings back to Research.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-(--color-background-page) py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-3 text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
            How I Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-(--color-text-primary) text-[length:var(--text-style-h1-font-size)] font-(--text-style-h1-font-weight) leading-(--text-style-h1-line-height) tracking-(--text-style-h1-letter-spacing)">
              UX Engineering process.
            </h2>
            <p className="max-w-sm text-(--color-text-muted) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)">
              A repeatable, systems-oriented workflow from problem discovery to
              production measurement.
            </p>
          </div>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-[2.25rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--color-border-default) to-transparent" />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                return (
                  <div
                    key={step.label}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Icon node */}
                    <div className="relative z-10 mb-6">
                      <div className="size-[4.5rem] rounded-(--card-radius) bg-(--card-background) border border-(--card-border) flex items-center justify-center shadow-(--card-shadow) group-hover:border-(--color-action-primary)/20 transition-all duration-200">
                        <Icon
                          name={step.icon}
                          size="md"
                          className="text-(--color-text-primary)"
                        />
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-1.5 -right-1.5 size-5 rounded-full bg-(--button-default-background) text-(--button-default-text) flex items-center justify-center text-[length:var(--text-style-caption-font-size)] font-(--text-style-h1-font-weight) leading-(--text-style-caption-line-height)">
                        {index + 1}
                      </div>
                    </div>

                    <p className="mb-2 text-(--color-text-primary) text-[length:var(--text-style-body-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)">
                      {step.label}
                    </p>
                    <p className="text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)">
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
            const isLast = index === steps.length - 1;
            return (
              <div key={step.label} className="flex gap-5">
                {/* Timeline column */}
                <div className="flex flex-col items-center">
                  <div className="size-11 rounded-(--card-radius) bg-(--card-background) border border-(--card-border) flex items-center justify-center shadow-(--card-shadow) shrink-0 relative">
                    <Icon
                      name={step.icon}
                      size="md"
                      className="text-(--color-text-primary)"
                    />
                    <div className="absolute -top-1 -right-1 size-4 rounded-full bg-(--button-default-background) text-(--button-default-text) flex items-center justify-center text-[length:var(--text-style-caption-font-size)] font-(--text-style-h1-font-weight) leading-(--text-style-caption-line-height)">
                      {index + 1}
                    </div>
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 min-h-8 bg-(--color-border-default) my-2" />
                  )}
                </div>

                {/* Content */}
                <div className={cn("pb-8 flex-1", isLast && "pb-0")}>
                  <p className="mb-1 text-(--color-text-primary) text-[length:var(--text-style-body-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-body-line-height)">
                    {step.label}
                  </p>
                  <p className="text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)">
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
              className="p-(--card-content-spacing) rounded-(--card-radius) border border-(--card-border) bg-(--card-background)"
            >
              <p className="mb-2 text-(--card-title-text) text-[length:var(--text-style-body-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)">
                {p.title}
              </p>
              <p className="text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
