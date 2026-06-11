import type React from "react";

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

import {
  accessibilityTopics,
  apiDesignItems,
  codeConnectExamples,
  codeConnectFlow,
  codeSnippet,
  componentAnatomy,
  componentDeepDiveBadges,
  componentDeepDiveLinks,
  designSpecItems,
  engineeringArchitectureSteps,
  lessonsLearned,
  problemChallenges,
  workflowSteps,
} from "./componentDeepDive.data";

const bodyText =
  "text-(--color-text-secondary) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)";
const captionText =
  "text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase";
const h3Text =
  "text-(--color-text-primary) text-[length:var(--text-style-h3-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-h3-line-height) tracking-(--text-style-h3-letter-spacing)";

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

function DetailCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="rounded-(--card-radius) border-(length:--card-border-width) border-(--card-border) bg-(--card-background) shadow-(--card-shadow)">
      <CardHeader>
        <CardTitle className={h3Text}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={bodyText}>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function LabeledList({ label, items }: { label: string; items: string[] }) {
  return (
    <Stack gap="sm">
      <p className={captionText}>{label}</p>
      <Inline>
        {items.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </Inline>
    </Stack>
  );
}

export function ComponentDeepDiveCaseStudy() {
  return (
    <main className="min-h-screen bg-(--color-background-page) text-(--color-text-primary)">
      <section className="pt-(--space-4xl) pb-(--space-3xl)">
        <Container>
          <Stack gap="xl">
            <Inline>
              {componentDeepDiveBadges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </Inline>

            <Stack gap="lg" className="max-w-(--layout-content-wide)">
              <h1 className="text-(--color-text-primary) text-[length:var(--text-style-display-font-size)] font-(--text-style-display-font-weight) leading-(--text-style-display-line-height) tracking-(--text-style-display-letter-spacing)">
                Component Deep Dive
              </h1>
              <p className="max-w-(--layout-content-default) text-(--color-text-secondary) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)">
                Exploring how design intent becomes production code through
                documentation, accessibility, component APIs, and design-to-code
                tooling.
              </p>
            </Stack>

            <Inline gap="md">
              <Button asChild>
                <a href={componentDeepDiveLinks.figma}>
                  View Figma
                  <Icon name="external-link" size="sm" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={componentDeepDiveLinks.github}>
                  View GitHub
                  <Icon name="external-link" size="sm" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={componentDeepDiveLinks.portfolio}>
                  <Icon name="arrow-left" size="sm" />
                  Back to Portfolio
                </a>
              </Button>
            </Inline>
          </Stack>
        </Container>
      </section>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Problem"
          title="Design and engineering drift when source-of-truth systems are weak."
          description="Design files become disconnected from implementation. Documentation becomes outdated. Developers lose confidence in the source of truth."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-3">
          {problemChallenges.map((challenge) => (
            <DetailCard
              key={challenge.title}
              title={challenge.title}
              description={challenge.description}
            />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="The Workflow"
          title="Design intent becomes production usage through connected artifacts."
          description="Each stage translates a component decision into something more concrete for the next audience."
        />
        <div className="grid gap-(--space-md) lg:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <Card key={step.title} className="relative rounded-(--card-radius) border-(--card-border)">
              <CardHeader>
                <p className={captionText}>Step {index + 1}</p>
                <CardTitle className={h3Text}>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="sm">
                  <p className={bodyText}>{step.purpose}</p>
                  <p className={bodyText}>
                    <span className="text-(--color-text-primary) font-(--text-style-caption-font-weight)">
                      Inputs:
                    </span>{" "}
                    {step.inputs}
                  </p>
                  <p className={bodyText}>
                    <span className="text-(--color-text-primary) font-(--text-style-caption-font-weight)">
                      Outputs:
                    </span>{" "}
                    {step.outputs}
                  </p>
                </Stack>
                {index < workflowSteps.length - 1 ? (
                  <Icon
                    name="arrow-right"
                    size="sm"
                    className="absolute -right-(--space-sm) top-1/2 z-(--z-index-raised) hidden -translate-y-1/2 text-(--color-text-muted) lg:block"
                    ariaLabel={`Moves from ${step.title} to ${workflowSteps[index + 1].title}`}
                  />
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Component Anatomy"
          title={`${componentAnatomy.name} as the representative component.`}
          description={componentAnatomy.description}
        />
        <Card className="rounded-(--card-radius) border-(--card-border)">
          <CardContent className="pt-6">
            <Stack gap="xl">
              <Inline gap="md">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </Inline>
              <div className="grid gap-(--space-lg) md:grid-cols-2">
                <LabeledList label="Variants" items={componentAnatomy.variants} />
                <LabeledList label="States" items={componentAnatomy.states} />
                <LabeledList label="Tokens Consumed" items={componentAnatomy.tokens} />
                <LabeledList
                  label="Accessibility Requirements"
                  items={componentAnatomy.accessibility}
                />
              </div>
            </Stack>
          </CardContent>
        </Card>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Design Specification"
          title="Documentation turns visual decisions into implementation constraints."
          description="A useful component spec gives developers enough context to preserve intent without slowing them down."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-3">
          {designSpecItems.map((item) => (
            <DetailCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Code Connect"
          title="Dev Mode becomes more useful when design components point to production components."
          description="Code Connect allows design components and production components to remain aligned by mapping variants, properties, examples, and documentation links."
        />
        <div className="grid gap-(--space-md) md:grid-cols-3">
          {codeConnectFlow.map((step, index) => (
            <Card key={step} className="relative rounded-(--card-radius) border-(--card-border)">
              <CardContent className="flex min-h-(--size-3xl) items-center justify-center p-(--space-md) text-center">
                <p className="text-(--card-title-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height)">
                  {step}
                </p>
                {index < codeConnectFlow.length - 1 ? (
                  <Icon
                    name="arrow-right"
                    size="sm"
                    className="absolute -right-(--space-sm) top-1/2 z-(--z-index-raised) hidden -translate-y-1/2 text-(--color-text-muted) md:block"
                    ariaLabel={`Connects ${step} to ${codeConnectFlow[index + 1]}`}
                  />
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-(--space-md) lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-(--space-md)">
            {codeConnectExamples.map((item) => (
              <DetailCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
          <Card className="rounded-(--card-radius) border-(--card-border)">
            <CardHeader>
              <CardTitle className={h3Text}>Example mapping</CardTitle>
              <CardDescription className={bodyText}>
                The exact syntax can evolve, but the architectural goal is stable:
                connect design properties to a typed React API.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto text-(--color-text-primary) text-[length:var(--text-style-mono-font-size)] font-(--text-style-mono-font-weight) leading-(--text-style-mono-line-height)">
                {codeSnippet.join("\n")}
              </pre>
            </CardContent>
          </Card>
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Accessibility"
          title="Accessibility is part of component architecture."
          description="If accessibility is only checked at the page level, every consuming team has to rediscover the same requirements. Components should carry those decisions forward."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-3">
          {accessibilityTopics.map((topic) => (
            <DetailCard key={topic.title} title={topic.title} description={topic.description} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Component API Design"
          title="Good APIs make the correct implementation path easier."
          description="The component API should reduce implementation complexity without hiding important design, accessibility, or semantic decisions."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-4">
          {apiDesignItems.map((item) => (
            <DetailCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Engineering Architecture"
          title="The component fits into the larger token and theme system."
          description="The same architecture that powers the portfolio also gives individual components stable styling contracts."
        />
        <div className="grid gap-(--space-sm) md:grid-cols-5">
          {engineeringArchitectureSteps.map((step, index) => (
            <Card key={step} className="relative rounded-(--card-radius) border-(--card-border)">
              <CardContent className="flex min-h-(--size-3xl) items-center justify-center p-(--space-md) text-center">
                <p className="text-(--card-title-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height)">
                  {step}
                </p>
                {index < engineeringArchitectureSteps.length - 1 ? (
                  <Icon
                    name="arrow-right"
                    size="sm"
                    className="absolute -right-(--space-sm) top-1/2 z-(--z-index-raised) hidden -translate-y-1/2 text-(--color-text-muted) md:block"
                    ariaLabel={`Flows from ${step} to ${engineeringArchitectureSteps[index + 1]}`}
                  />
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Lessons Learned"
          title="Design-to-code systems succeed when they respect real team behavior."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2">
          {lessonsLearned.map((lesson) => (
            <Card key={lesson} className="rounded-(--card-radius) border-(--card-border)">
              <CardContent className="flex items-start gap-(--space-sm) pt-6">
                <Icon name="check" size="sm" className="mt-1 text-(--color-action-primary)" />
                <p className={bodyText}>{lesson}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Outcome"
          title="A component system that keeps intent and implementation aligned."
          description="The result is a workflow that connects design-to-code, developer experience, maintainability, and scalability. Components become shared contracts instead of isolated design files or one-off implementations."
        />
        <Inline gap="md">
          <Button asChild>
            <a href={componentDeepDiveLinks.portfolio}>
              Back to Portfolio
              <Icon name="arrow-right" size="sm" />
            </a>
          </Button>
        </Inline>
      </CaseStudySection>
    </main>
  );
}
