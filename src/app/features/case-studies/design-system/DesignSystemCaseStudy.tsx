import type { ReactNode } from "react";

import { Icon } from "@/design-system/icons";
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
  accessibility,
  architecture,
  caseStudyImages,
  caseStudyTitle,
  designSystemCaseStudyLinks,
  designToCode,
  developerTooling,
  differently,
  figmaSchema,
  impactMetrics,
  openingSummary,
  problem,
  quantityStepper,
  scope,
} from "./designSystemCaseStudy.data";

const bodyText =
  "text-(--color-text-secondary) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)";
const bodyLargeText =
  "text-(--color-text-secondary) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)";
const h3Text =
  "text-(--color-text-primary) text-[length:var(--text-style-h3-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-h3-line-height) tracking-(--text-style-h3-letter-spacing)";

type CaseStudyImage = {
  src: string;
  alt: string;
};

function CaseStudySection({
  children,
  className = "",
}: {
  children: ReactNode;
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

function TextBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Stack gap="md" className="max-w-(--layout-content-default)">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={bodyText}>
          {paragraph}
        </p>
      ))}
    </Stack>
  );
}

function ImageFrame({ image }: { image: CaseStudyImage }) {
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

function ImageGrid({
  images,
  columns = "md:grid-cols-2",
}: {
  images: CaseStudyImage[];
  columns?: string;
}) {
  return (
    <div className={`grid gap-(--space-md) ${columns}`}>
      {images.map((image) => (
        <ImageFrame key={image.src} image={image} />
      ))}
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="rounded-(--card-radius) border-(--card-border) shadow-(--card-shadow)">
      <CardHeader>
        <CardTitle className="text-(--color-text-primary) text-[length:var(--text-style-h2-font-size)] font-(--text-style-h2-font-weight) leading-(--text-style-h2-line-height) tracking-(--text-style-h2-letter-spacing)">
          {value}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={bodyText}>{label}</CardDescription>
      </CardContent>
    </Card>
  );
}

export function DesignSystemCaseStudy() {
  return (
    <main className="min-h-screen bg-(--color-background-page) text-(--color-text-primary)">
      <section className="pt-(--space-4xl) pb-(--space-3xl)">
        <Container>
          <Stack gap="xl">
            <Button asChild variant="outline" className="w-fit">
              <a href={designSystemCaseStudyLinks.portfolio}>
                <Icon name="arrow-left" size="sm" />
                Back to Portfolio
              </a>
            </Button>

            <Stack gap="lg" className="max-w-(--layout-content-wide)">
              <h1 className="text-(--color-text-primary) text-[length:var(--text-style-display-font-size)] font-(--text-style-display-font-weight) leading-(--text-style-display-line-height) tracking-(--text-style-display-letter-spacing)">
                {caseStudyTitle}
              </h1>
              <Stack gap="md" className="max-w-(--layout-content-default)">
                {openingSummary.map((paragraph) => (
                  <p key={paragraph} className={bodyLargeText}>
                    {paragraph}
                  </p>
                ))}
              </Stack>
            </Stack>

            <ImageFrame image={caseStudyImages.hero} />
          </Stack>
        </Container>
      </section>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader title="The problem" />
        <TextBlock paragraphs={problem} />
        <ImageFrame image={caseStudyImages.threeProducts} />
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader title="My scope" />
        <TextBlock paragraphs={scope} />
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader title="What I built & why" />
        <Stack gap="3xl">
          <Stack gap="lg">
            <h3 className={h3Text}>
              Architecture — the dual-layer customization model
            </h3>
            <TextBlock paragraphs={architecture} />
            <ImageGrid
              images={[
                caseStudyImages.componentList,
                caseStudyImages.systemPillars,
              ]}
            />
          </Stack>

          <Stack gap="lg">
            <h3 className={h3Text}>Accessibility — from 20% to 100%</h3>
            <TextBlock paragraphs={accessibility} />
          </Stack>

          <Stack gap="lg">
            <h3 className={h3Text}>
              Developer tooling — making the system self-serve
            </h3>
            <TextBlock paragraphs={developerTooling} />
            <ImageGrid
              images={[
                caseStudyImages.templateDoc,
                caseStudyImages.directionDoc,
                caseStudyImages.namingGuide,
              ]}
              columns="md:grid-cols-2 lg:grid-cols-3"
            />
          </Stack>

          <Stack gap="lg">
            <h3 className={h3Text}>Design-to-code process</h3>
            <TextBlock paragraphs={designToCode} />
            <ImageGrid
              images={[
                caseStudyImages.directionSlides,
                caseStudyImages.reviewSlide,
                caseStudyImages.specs,
                caseStudyImages.listCell,
                caseStudyImages.zoom,
              ]}
              columns="md:grid-cols-2"
            />
          </Stack>
        </Stack>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader title="Component spotlight — Quantity Stepper" />
        <TextBlock paragraphs={quantityStepper} />
        <ImageFrame image={caseStudyImages.stepper} />
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader title="What I'd do differently" />
        <TextBlock paragraphs={differently} />
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader title="Impact" />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric) => (
            <MetricCard key={metric.value} {...metric} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader title="Figma Schema 2022" />
        <TextBlock paragraphs={figmaSchema} />
        <ImageFrame image={caseStudyImages.conference} />
        <Inline gap="md">
          <Button asChild>
            <a href={designSystemCaseStudyLinks.portfolio}>
              Back to Portfolio
              <Icon name="arrow-right" size="sm" />
            </a>
          </Button>
        </Inline>
      </CaseStudySection>
    </main>
  );
}
