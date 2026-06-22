import type { ReactNode } from "react";

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
  approachIntro,
  approachListCell,
  caseStudyImages,
  caseStudyTitle,
  designSystemCaseStudyLinks,
  heroSummary,
  impactMetrics,
  outcome,
  pipeline,
  problem,
  problemCallout,
  problemClosing,
  projectDetails,
  reflections,
  roleDrove,
  roleIntro,
  roleOwned,
  tags,
} from "./designSystemCaseStudy.data";

const bodyText =
  "text-(--color-text-secondary) text-[length:var(--text-style-body-font-size)] font-(--text-style-body-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing)";
const bodyLargeText =
  "text-(--color-text-secondary) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)";
const captionText =
  "text-(--color-text-muted) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) tracking-(--text-style-caption-letter-spacing) uppercase";
const h3Text =
  "text-(--color-text-primary) text-[length:var(--text-style-h3-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-h3-line-height) tracking-(--text-style-h3-letter-spacing)";

type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
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
    <Stack gap="md">
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

function Figure({ image }: { image: CaseStudyImage }) {
  return (
    <Stack gap="sm">
      <ImageFrame image={image} />
      {image.caption ? (
        <figcaption className={captionText}>{image.caption}</figcaption>
      ) : null}
    </Stack>
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

function RoleCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="rounded-(--card-radius) border-(--card-border)">
      <CardHeader>
        <CardTitle className={h3Text}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Stack gap="sm">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-(--space-sm)">
              <Icon
                name="check"
                size="sm"
                className="mt-1 text-(--color-action-primary)"
              />
              <p className={bodyText}>{item}</p>
            </div>
          ))}
        </Stack>
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

            <Stack gap="lg">
              <p className={captionText}>
                Case Study · DoorDash · 2021–2025
              </p>
              <h1 className="text-(--color-text-primary) text-[length:var(--text-style-display-font-size)] font-(--text-style-display-font-weight) leading-(--text-style-display-line-height) tracking-(--text-style-display-letter-spacing)">
                {caseStudyTitle}
              </h1>
              <p className={bodyLargeText}>{heroSummary}</p>
              <Inline gap="xs" className="w-full justify-between gap-y-(--space-xs)">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-(--badge-shape-radius) border-0 bg-(--badge-secondary-background) text-(--badge-secondary-text)"
                  >
                    {tag}
                  </Badge>
                ))}
              </Inline>
            </Stack>

            <ImageFrame image={caseStudyImages.hero} />
          </Stack>
        </Container>
      </section>

      <CaseStudySection className="bg-(--color-background-surface)">
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-3">
          {projectDetails.map((detail) => (
            <Card
              key={detail.label}
              className={`justify-center rounded-(--card-radius) border-(--card-border) ${
                detail.span === "wide"
                  ? "lg:col-span-3"
                  : detail.span === "two"
                    ? "lg:col-span-2"
                    : ""
              }`}
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
          {impactMetrics.map((metric) => (
            <MetricCard key={metric.value} {...metric} />
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader eyebrow="The problem" title="A silent killer" />
        <TextBlock paragraphs={problem} />
        <ImageGrid
          images={[caseStudyImages.productUi, caseStudyImages.collab]}
        />
        <Card className="rounded-(--card-radius) border-(--card-border) border-l-4 border-l-(--color-action-primary) bg-(--color-background-surface)">
          <CardContent className="pt-6">
            <p className={`${bodyLargeText} text-(--color-text-primary)`}>
              {problemCallout}
            </p>
          </CardContent>
        </Card>
        <TextBlock paragraphs={problemClosing} />
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="The approach"
          title="Borrow the pattern. Translate the principle."
        />
        <TextBlock paragraphs={approachIntro} />
        <Figure image={caseStudyImages.headless} />
        <TextBlock paragraphs={approachListCell} />
        <Stack gap="sm">
          <ImageGrid
            images={[caseStudyImages.listCell, caseStudyImages.componentList]}
          />
          {caseStudyImages.componentList.caption ? (
            <figcaption className={captionText}>
              {caseStudyImages.componentList.caption}
            </figcaption>
          ) : null}
        </Stack>

        <Stack gap="lg">
          <h3 className={h3Text}>The pipeline</h3>
          <TextBlock paragraphs={pipeline} />
          <Figure image={caseStudyImages.pipeline} />
        </Stack>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="The outcome"
          title="Engineers stopped leaving the system"
        />
        <TextBlock paragraphs={outcome} />
        <Figure image={caseStudyImages.systemOffering} />
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="My role"
          title="What I owned, what I drove"
        />
        <TextBlock paragraphs={roleIntro} />
        <div className="grid gap-(--space-md) md:grid-cols-2">
          <RoleCard title="Owned end to end" items={roleOwned} />
          <RoleCard title="Drove as part of a larger effort" items={roleDrove} />
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Reflection"
          title="What I'd do differently"
        />
        <Stack gap="md" className="max-w-(--layout-content-default)">
          {reflections.map((reflection) => (
            <div
              key={reflection.number}
              className="flex items-start gap-(--space-md)"
            >
              <span className="text-(--color-text-muted) text-[length:var(--text-style-h3-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-h3-line-height)">
                {reflection.number}
              </span>
              <p className={bodyText}>{reflection.text}</p>
            </div>
          ))}
        </Stack>
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
