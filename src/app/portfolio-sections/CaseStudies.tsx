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
import { generativeUiLinks } from "@/app/features/case-studies/generative-ui/generativeUi.data";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

interface CaseStudy {
  id: string;
  company: string;
  title: string;
  problem?: string;
  contribution?: string;
  focus?: string[];
  impact?: string;
  tags?: string[];
  overview?: string;
  image?: {
    src: string;
    alt: string;
  };
  year: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "portfolio-ds",
    company: "DoorDash",
    title: "DoorDash Design System Reimagined",
    overview:
      "Engineers were leaving the design system every time a design deviated from the default. Headless SwiftUI components let them keep visual flexibility while inheriting accessibility, dark mode, and tokens, which grew adoption from 40% to 95% across three products.",
    image: {
      src: `${baseUrl}case-studies/prism-ios/dd-card.jpg`,
      alt: "DoorDash design system components arranged on a soft red background",
    },
    year: "2021–2025",
  },
  {
    id: "doordash",
    company: "DoorDash",
    title: "Carousel Debugger",
    overview:
      "Designed and prototyped a debugging experience for DoorDash's affordability carousel, making promotion logic easier for teams to inspect, explain, and troubleshoot.",
    image: {
      src: `${baseUrl}case-studies/prism-ios/affordability-carousel.png`,
      alt: "DoorDash affordability carousel showing weekly deals on the consumer homepage",
    },
    year: "2025–2026",
  },
];

export function CaseStudies() {
  const caseStudyLinks: Partial<
    Record<string, { href: string; label: string }>
  > = {
    doordash: {
      href: generativeUiLinks.caseStudy,
      label: "Read the Carousel Debugger case study",
    },
    "portfolio-ds": {
      href: designSystemCaseStudyLinks.caseStudy,
      label: "Read the DoorDash Design System Reimagined case study",
    },
  };

  return (
    <section id="case-studies" className="bg-(--color-background-page) py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="mb-8">
          <p className="mb-3 text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase">
            Featured Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-(--color-text-primary) text-[length:var(--text-style-h1-font-size)] font-(--text-style-h1-font-weight) leading-(--text-style-h1-line-height) tracking-(--text-style-h1-letter-spacing)">
              Case studies.
            </h2>
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
                  {cs.image && (
                    <img
                      src={cs.image.src}
                      alt={cs.image.alt}
                      className="aspect-[16/9] w-full rounded-(--card-radius) object-cover"
                      loading="lazy"
                    />
                  )}

                  {cs.overview ? (
                    <CardDescription className="text-(--card-description-text) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)">
                      {cs.overview}
                    </CardDescription>
                  ) : (
                    <>
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
                          {cs.focus?.map((f) => (
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
                        {cs.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-(--card-description-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-caption-line-height)"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
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
