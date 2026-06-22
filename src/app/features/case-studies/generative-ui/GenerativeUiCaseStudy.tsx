import { Icon } from "@/design-system/icons";
import { Badge } from "@/design-system/components/badge";
import { Button } from "@/design-system/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/design-system/components/card";
import { Container } from "@/design-system/components/container";
import { Inline } from "@/design-system/components/inline";
import { SectionHeader } from "@/design-system/components/section-header";
import { Stack } from "@/design-system/components/stack";

import { generativeUiBadges, generativeUiLinks } from "./generativeUi.data";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const carouselImage = {
  src: `${baseUrl}case-studies/prism-ios/affordability-carousel.png`,
  alt: "DoorDash affordability carousel showing weekly deals on the consumer homepage",
};

const confluenceRunbookImage = {
  src: `${baseUrl}case-studies/carousel-debugger/confluence-runbook.png`,
  alt: "Confluence page for a carousel debugging runbook",
};

const carouselManagerImage = {
  src: `${baseUrl}case-studies/carousel-debugger/carousel-manager.png`,
  alt: "Carousel Manager interface showing a searched carousel record",
};

const runbookFlowchartImage = {
  src: `${baseUrl}case-studies/carousel-debugger/runbook-flowchart.png`,
  alt: "Lucidchart flowchart mapping the carousel debugging runbook steps",
};

const prototypeCarouselManagerImage = {
  src: `${baseUrl}case-studies/carousel-debugger/prototype-carousel-manager-debug.png`,
  alt: "Carousel Manager prototype showing the debug entry point for a carousel",
};

const standardDemoVideo = {
  src: `${baseUrl}case-studies/carousel-debugger/standard-demo.mov`,
  title: "Carousel Debugger standard prototype demo",
};

const genUiDemoVideo = {
  src: `${baseUrl}case-studies/carousel-debugger/genui-demo.mov`,
  title: "Carousel Debugger GenUI prototype demo",
};

const bodyText =
  "text-(--color-text-secondary) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)";
const captionText =
  "text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase";
const h3Text =
  "text-(--color-text-primary) text-[length:var(--text-style-h3-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-h3-line-height) tracking-(--text-style-h3-letter-spacing)";

const projectDetails = [
  {
    label: "Role",
    value:
      "UX Engineer, concept through execution · backend support from one engineer on the first iteration",
  },
  {
    label: "Team",
    value: "TOAD initiative → solo within Affordability team (Growth org)",
  },
  {
    label: "Timeline",
    value:
      "2025–2026 · 1 month first iteration · 1 month backend connections · 1 day GenUI update",
  },
  {
    label: "Tools",
    value:
      "React, TypeScript, Next.js, GenAI gateway, Snowflake, Chronosphere, Airtable, DoorDash design system",
  },
  {
    label: "Business goal",
    value:
      "Faster carousel issue resolution at scale, without requiring deep system knowledge",
  },
  {
    label: "Key users",
    value: "Engineers and ops teams managing consumer-facing carousels",
  },
  {
    label: "Problem solved",
    value:
      "A manual runbook spanning 5+ tools that could take 30 minutes to a full day, collapsed into an automated pipeline that runs in seconds and tells you exactly where the failure is and what to do next",
  },
];

const designProcess = [
  "Identified the problem through past support channel tickets and firsthand experience",
  "Audited the existing Confluence runbook to understand every diagnostic step and failure pattern",
  "Mapped the full backend architecture to identify which systems needed to be connected",
  "Drew inspiration from Bitrise's log UI to establish the step-by-step sequential pattern",
  "Chose to build in code using the existing design system rather than designing in Figma first",
  "Scoped the orchestration layer as a UI-agnostic middle layer so the same pipeline could power different output surfaces",
  "Made the decision to explore GenUI as the output layer, replacing static error templates with dynamically generated components",
];

const developmentProcess = [
  "Built the first iteration with backend engineer support, prioritizing as many live tool connections as possible",
  "Presented to the Growth org, validated the concept, and collected signal on future direction",
  "Built the second iteration solo, implementing the GenUI surface inside the existing step accordion pattern",
  "Continued iterating independently until departure",
];

const metrics = [
  {
    value: "1 hr+",
    label: "Time saved",
    description: "Debugging time saved per carousel issue",
  },
  {
    value: "5+ → 1",
    label: "Tools unified",
    description: "A multi-tool manual runbook collapsed into one pipeline",
  },
  {
    value: "~30",
    label: "Stakeholders",
    description: "Presented to the Growth org to strong reception",
  },
  {
    value: "5",
    label: "Squad led",
    description: "Founded and led TOAD, a cross-functional R&D squad",
  },
];

const results = [
  "Presented to ~30 people across the Growth org to strong reception",
  "Recognized in performance review for reducing carousel debugging time by over an hour per issue",
  "Generated cross-team interest in expanding coverage to programmatic carousels",
  "Established a reusable orchestration pattern that could scale beyond the Affordability team",
];

const learnings = [
  "Getting access to internal tools was the biggest friction point. Permissions and missing connections slowed down how many systems could be fully integrated in the prototype",
  "The GenUI layer proved that the same orchestration pipeline could power fundamentally different output surfaces without any changes to the underlying architecture",
  "The Growth org's appetite for programmatic carousel support pointed to a clear next phase: two entry points, one inside Carousel Manager scoped to managed carousels, and one inside dev tools that could debug both managed and programmatic carousels",
  "The project still needs one more prototype iteration to get to a place where it could go in front of leadership for resourcing",
];

function CaseStudySection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-(--space-3xl) ${className}`}>
      <Container>
        <Stack gap="xl">{children}</Stack>
      </Container>
    </section>
  );
}

function ImageFrame({ image }: { image: { src: string; alt: string } }) {
  return (
    <figure className="overflow-hidden rounded-(--card-radius) border border-(--card-border) bg-(--card-background) shadow-(--card-shadow)">
      <img
        src={image.src}
        alt={image.alt}
        className="block aspect-[16/9] w-full object-contain"
        loading="lazy"
      />
    </figure>
  );
}

function ChecklistCard({ item }: { item: string }) {
  return (
    <Card className="rounded-(--card-radius) border-(--card-border)">
      <CardContent className="flex items-start gap-(--space-sm) pt-6">
        <Icon name="check" size="sm" className="mt-1 text-(--color-action-primary)" />
        <p className={bodyText}>{item}</p>
      </CardContent>
    </Card>
  );
}

function MetricCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <Card className="rounded-(--card-radius) border-(--card-border) shadow-(--card-shadow)">
      <CardHeader>
        <CardTitle className="text-(--color-text-primary) text-[length:var(--text-style-h2-font-size)] font-(--text-style-h2-font-weight) leading-(--text-style-h2-line-height) tracking-(--text-style-h2-letter-spacing)">
          {value}
        </CardTitle>
        <p className={captionText}>{label}</p>
      </CardHeader>
      <CardContent>
        <CardDescription className={bodyText}>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export function GenerativeUiCaseStudy() {
  return (
    <main className="min-h-screen bg-(--color-background-page) text-(--color-text-primary)">
      <section className="pt-(--space-4xl) pb-(--space-3xl)">
        <Container>
          <Stack gap="xl">
            <Button asChild variant="outline" className="w-fit">
              <a href={generativeUiLinks.portfolio}>
                <Icon name="arrow-left" size="sm" />
                Back to Portfolio
              </a>
            </Button>

            <Stack gap="lg">
              <p className={captionText}>Case Study · DoorDash · 2025–2026</p>
              <h1 className="text-(--color-text-primary) text-[length:var(--text-style-display-font-size)] font-(--text-style-display-font-weight) leading-(--text-style-display-line-height) tracking-(--text-style-display-letter-spacing)">
                Debugging Carousels with Generative UI
              </h1>
              <p className="text-(--color-text-secondary) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)">
                A prototype internal debugger born out of DoorDash&apos;s TOAD
                (Tools, Optimization, and Advanced Development) initiative that
                automates the process of diagnosing why any consumer-facing
                carousel isn&apos;t showing up, checking every layer of the
                pipeline and telling you exactly what&apos;s wrong and how to fix
                it.
              </p>
              <Inline gap="xs" className="w-full justify-between gap-y-(--space-xs)">
                {generativeUiBadges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="secondary"
                    className="rounded-(--badge-shape-radius) border-0 bg-(--badge-secondary-background) text-(--badge-secondary-text)"
                  >
                    {badge}
                  </Badge>
                ))}
              </Inline>
            </Stack>

            <ImageFrame image={carouselImage} />
          </Stack>
        </Container>
      </section>

      <CaseStudySection className="bg-(--color-background-surface)">
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-3">
          {projectDetails.map((detail) => (
            <Card
              key={detail.label}
              className={
                detail.label === "Problem solved"
                  ? "justify-center rounded-(--card-radius) border-(--card-border) lg:col-span-3"
                  : "justify-center rounded-(--card-radius) border-(--card-border)"
              }
            >
              <CardHeader className="pb-6">
                <p className={captionText}>{detail.label}</p>
                <CardTitle className="text-(--color-text-primary) text-[length:var(--text-style-body-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-body-line-height)">
                  {detail.value}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.value} {...metric} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Challenge"
          title="Five tools, one runbook, a day lost"
          description="While leading TOAD, a self-directed enablement squad of five engineers, we identified that debugging a broken carousel was one of the most painful and time-consuming processes teams dealt with. There was no tooling, just a long Confluence runbook and a support channel to ping when you got stuck."
        />
        <img
          src={confluenceRunbookImage.src}
          alt={confluenceRunbookImage.alt}
          className="w-full rounded-(--card-radius) border border-(--card-border) object-cover shadow-(--card-shadow)"
          loading="lazy"
        />
        <img
          src={carouselManagerImage.src}
          alt={carouselManagerImage.alt}
          className="w-full rounded-(--card-radius) border border-(--card-border) object-cover shadow-(--card-shadow)"
          loading="lazy"
        />
        <Card className="rounded-(--card-radius) border-(--card-border)">
          <CardContent className="pt-6">
            <CardDescription className={bodyText}>
              That discovery became the Carousel Debugger, a tool that automates
              every step of that runbook, checks all the right systems in
              sequence, and tells you exactly what&apos;s wrong and how to fix
              it.
            </CardDescription>
          </CardContent>
        </Card>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Process"
          title="From runbook audit to GenUI output"
        />
        <div className="grid gap-(--space-md) lg:grid-cols-2">
          <Card className="rounded-(--card-radius) border-(--card-border)">
            <CardHeader>
              <CardTitle className={h3Text}>Design</CardTitle>
            </CardHeader>
            <CardContent>
              <Stack gap="sm">
                {designProcess.map((item) => (
                  <div key={item} className="flex items-start gap-(--space-sm)">
                    <Icon name="check" size="sm" className="mt-1 text-(--color-action-primary)" />
                    <p className={bodyText}>{item}</p>
                  </div>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card className="rounded-(--card-radius) border-(--card-border)">
            <CardHeader>
              <CardTitle className={h3Text}>Development</CardTitle>
            </CardHeader>
            <CardContent>
              <Stack gap="sm">
                {developmentProcess.map((item) => (
                  <div key={item} className="flex items-start gap-(--space-sm)">
                    <Icon name="check" size="sm" className="mt-1 text-(--color-action-primary)" />
                    <p className={bodyText}>{item}</p>
                  </div>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Runbook Flow"
          title="The runbook became the blueprint"
        />
        <img
          src={runbookFlowchartImage.src}
          alt={runbookFlowchartImage.alt}
          className="mx-auto max-h-[1200px] w-full max-w-(--layout-content-wide) rounded-(--card-radius) border border-(--card-border) object-contain shadow-(--card-shadow)"
          loading="lazy"
        />
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Prototype"
          title="Debugging where teams already work"
        />
        <img
          src={prototypeCarouselManagerImage.src}
          alt={prototypeCarouselManagerImage.alt}
          className="w-full rounded-(--card-radius) border border-(--card-border) object-cover shadow-(--card-shadow)"
          loading="lazy"
        />
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Results and Impact"
          title="Proof the approach works"
        />
        <div className="grid gap-(--space-md) md:grid-cols-2">
          {results.map((result) => (
            <ChecklistCard key={result} item={result} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Standard Demo"
          title="Automating the runbook, step by step"
        />
        <video
          className="aspect-video w-full rounded-(--card-radius) border border-(--card-border) bg-(--color-background-page) object-cover shadow-(--card-shadow)"
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="auto"
          poster={prototypeCarouselManagerImage.src}
          aria-label={standardDemoVideo.title}
        >
          <source src={standardDemoVideo.src} />
        </video>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="GenUI Demo"
          title="Failures become guidance"
        />
        <video
          className="aspect-video w-full rounded-(--card-radius) border border-(--card-border) bg-(--color-background-page) object-cover shadow-(--card-shadow)"
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="auto"
          poster={prototypeCarouselManagerImage.src}
          aria-label={genUiDemoVideo.title}
        >
          <source src={genUiDemoVideo.src} />
        </video>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Learnings and Next Steps"
          title="What I learned, what's next"
        />
        <div className="grid gap-(--space-md) md:grid-cols-2">
          {learnings.map((learning) => (
            <ChecklistCard key={learning} item={learning} />
          ))}
        </div>
        <Inline gap="md">
          <Button asChild>
            <a href={generativeUiLinks.portfolio}>
              Back to Portfolio
              <Icon name="arrow-right" size="sm" />
            </a>
          </Button>
        </Inline>
      </CaseStudySection>
    </main>
  );
}
