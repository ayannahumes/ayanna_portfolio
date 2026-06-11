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
  audiences,
  demoStates,
  generativeUiBadges,
  generativeUiLinks,
  lessonsLearned,
  problemBullets,
  prototypeAnatomy,
  solutionFeatures,
  systemFlowSteps,
  technicalArchitectureSteps,
  uiPatternComparison,
  uxEngineeringDecisions,
} from "./generativeUi.data";

const bodyText =
  "text-(--color-text-secondary) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)";
const captionText =
  "text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase";
const h3Text =
  "text-(--color-text-primary) text-[length:var(--text-style-h3-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-h3-line-height) tracking-(--text-style-h3-letter-spacing)";

function CaseStudySection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-(--space-3xl) ${className}`}>
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

export function GenerativeUiCaseStudy() {
  return (
    <main className="min-h-screen bg-(--color-background-page) text-(--color-text-primary)">
      <section className="pt-(--space-4xl) pb-(--space-3xl)">
        <Container>
          <Stack gap="xl">
            <Inline>
              {generativeUiBadges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </Inline>

            <Stack gap="lg" className="max-w-(--layout-content-wide)">
              <p className={captionText}>Affordability Platform</p>
              <h1 className="text-(--color-text-primary) text-[length:var(--text-style-display-font-size)] font-(--text-style-display-font-weight) leading-(--text-style-display-line-height) tracking-(--text-style-display-letter-spacing)">
                Generative UI for Platform Debugging
              </h1>
              <p className="max-w-(--layout-content-default) text-(--color-text-secondary) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)">
                A prototype exploring how AI-assisted interfaces can visualize
                decision logic, expose system behavior, and reduce debugging
                complexity across platform teams.
              </p>
            </Stack>

            <Inline gap="md">
              <Button asChild>
                <a href={generativeUiLinks.demo}>
                  View Live Demo
                  <Icon name="arrow-right" size="sm" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={generativeUiLinks.github}>
                  View GitHub
                  <Icon name="external-link" size="sm" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={generativeUiLinks.portfolio}>
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
          title="Opaque platform logic made debugging slower than it needed to be."
          description="Affordability experiences were controlled by platform decision logic that was difficult for teams to inspect. When an experience appeared, disappeared, or behaved unexpectedly, engineers had to trace multiple decision points manually."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-3">
          {problemBullets.map((problem) => (
            <DetailCard
              key={problem.title}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Users / Audience"
          title="Different teams needed different kinds of visibility."
          description="The prototype was framed around the people who needed to explain, debug, design, and operate customer-facing affordability behavior."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience) => (
            <DetailCard
              key={audience.title}
              title={audience.title}
              description={audience.description}
            />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Proposed Solution"
          title="Reframe debugging as an interactive explanation experience."
          description="The prototype explored how a Generative UI could reveal system state, explain decision paths, and support handoffs without oversimplifying the underlying platform behavior."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-3">
          {solutionFeatures.map((feature) => (
            <DetailCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="System Flow"
          title="A decision becomes visible, explainable, and actionable."
        />
        <div className="grid gap-(--space-sm) lg:grid-cols-5">
          {systemFlowSteps.map((step, index) => (
            <Card key={step} className="relative rounded-(--card-radius) border-(--card-border)">
              <CardContent className="flex min-h-(--size-3xl) items-center justify-center p-(--space-md) text-center">
                <p className="text-(--card-title-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height)">
                  {step}
                </p>
                {index < systemFlowSteps.length - 1 ? (
                  <Icon
                    name="arrow-right"
                    size="sm"
                    className="absolute -right-(--space-sm) top-1/2 z-(--z-index-raised) hidden -translate-y-1/2 text-(--color-text-muted) lg:block"
                    ariaLabel={`Flows from ${step} to ${systemFlowSteps[index + 1]}`}
                  />
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Generative UI Pattern"
          title="Move from fixed observation to contextual explanation."
          description="Debugging complex systems often requires an interface that changes shape around the question being asked."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2">
          {uiPatternComparison.map((pattern) => (
            <DetailCard
              key={pattern.title}
              title={pattern.title}
              description={pattern.description}
            />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Prototype Anatomy"
          title="The demo is planned as a guided debugging surface."
          description="Each part of the interface gives users a clearer path from scenario to system reasoning to next action."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-3">
          {prototypeAnatomy.map((item) => (
            <Card key={item.title} className="rounded-(--card-radius) border-(--card-border)">
              <CardHeader>
                <CardTitle className={h3Text}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="sm">
                  <p className={bodyText}>
                    <span className="text-(--color-text-primary) font-(--text-style-caption-font-weight)">
                      Purpose:
                    </span>{" "}
                    {item.purpose}
                  </p>
                  <p className={bodyText}>
                    <span className="text-(--color-text-primary) font-(--text-style-caption-font-weight)">
                      Interaction:
                    </span>{" "}
                    {item.interaction}
                  </p>
                  <p className={bodyText}>
                    <span className="text-(--color-text-primary) font-(--text-style-caption-font-weight)">
                      Value:
                    </span>{" "}
                    {item.value}
                  </p>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Technical Architecture"
          title="Synthetic data can preserve the concept without exposing confidential logic."
          description="The portfolio demo can use mocked platform data and reconstructed interface patterns to protect company confidentiality while preserving the UX and technical concept."
        />
        <div className="grid gap-(--space-sm) lg:grid-cols-5">
          {technicalArchitectureSteps.map((step, index) => (
            <Card key={step} className="relative rounded-(--card-radius) border-(--card-border)">
              <CardContent className="flex min-h-(--size-3xl) items-center justify-center p-(--space-md) text-center">
                <p className="text-(--card-title-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height)">
                  {step}
                </p>
                {index < technicalArchitectureSteps.length - 1 ? (
                  <Icon
                    name="arrow-right"
                    size="sm"
                    className="absolute -right-(--space-sm) top-1/2 z-(--z-index-raised) hidden -translate-y-1/2 text-(--color-text-muted) lg:block"
                    ariaLabel={`Connects ${step} to ${technicalArchitectureSteps[index + 1]}`}
                  />
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Confidentiality Note"
          title="The portfolio version is intentionally generalized."
          description="This portfolio version uses generalized language, synthetic examples, and reconstructed interface patterns. It does not expose proprietary business logic, internal data, or confidential implementation details."
        />
      </CaseStudySection>

      <CaseStudySection id="demo-preview">
        <SectionHeader
          eyebrow="Live Demo Preview"
          title="The next iteration will make the concept interactive."
          description="The next iteration of this case study will include a working interactive demo that lets users select a scenario, inspect a decision tree, and view generated debugging guidance."
        />
        <Card className="rounded-(--card-radius) border-(--card-border)">
          <CardContent className="pt-6">
            <Stack gap="lg">
              <Inline>
                {demoStates.map((state) => (
                  <Badge key={state} variant="secondary">
                    {state}
                  </Badge>
                ))}
              </Inline>
              <Button disabled>Demo Coming Soon</Button>
            </Stack>
          </CardContent>
        </Card>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Key UX Engineering Decisions"
          title="The prototype balanced explanation with technical honesty."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2">
          {uxEngineeringDecisions.map((decision) => (
            <Card key={decision} className="rounded-(--card-radius) border-(--card-border)">
              <CardContent className="flex items-start gap-(--space-sm) pt-6">
                <Icon name="check" size="sm" className="mt-1 text-(--color-action-primary)" />
                <p className={bodyText}>{decision}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Outcome"
          title="Opaque behavior became a clearer debugging interaction model."
          description="The prototype demonstrated how opaque platform behavior could become explainable through generative interface patterns. It created a clearer path for debugging, cross-functional alignment, and future platform observability tooling."
        />
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Lessons Learned"
          title="Generative UI works best when it is grounded in real system structure."
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
