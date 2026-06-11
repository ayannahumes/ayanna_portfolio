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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/design-system/components/dropdown-menu";
import { Inline } from "@/design-system/components/inline";
import { SectionHeader } from "@/design-system/components/section-header";
import { Stack } from "@/design-system/components/stack";

import {
  architectureSteps,
  componentSummaries,
  designSystemCaseStudyLinks,
  metadataBadges,
  problemBullets,
  runtimeFiles,
  themePreviews,
  tokenCategories,
  tradeoffs,
} from "./designSystemCaseStudy.data";

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

function TokenCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="rounded-(--card-radius) border-(length:--card-border-width) border-(--card-border) shadow-(--card-shadow)">
      <CardHeader>
        <CardTitle className={h3Text}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={bodyText}>{children}</CardDescription>
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
            <Inline>
              {metadataBadges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </Inline>

            <Stack gap="lg" className="max-w-(--layout-content-wide)">
              <h1 className="text-(--color-text-primary) text-[length:var(--text-style-display-font-size)] font-(--text-style-display-font-weight) leading-(--text-style-display-line-height) tracking-(--text-style-display-letter-spacing)">
                Portfolio Design System
              </h1>
              <p className="max-w-(--layout-content-default) text-(--color-text-secondary) text-[length:var(--text-style-body-lg-font-size)] font-(--text-style-body-lg-font-weight) leading-(--text-style-body-lg-line-height) tracking-(--text-style-body-lg-letter-spacing)">
                A living design system powering this portfolio, built to
                demonstrate token architecture, theme switching, component
                composition, and design-to-code workflows.
              </p>
            </Stack>

            <Inline gap="md">
              <Button asChild>
                <a href={designSystemCaseStudyLinks.readme}>
                  View GitHub README
                  <Icon name="external-link" size="sm" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={designSystemCaseStudyLinks.figma}>
                  View Figma
                  <Icon name="external-link" size="sm" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={designSystemCaseStudyLinks.portfolio}>
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
          title="From static portfolio to reusable product system."
          description="The portfolio needed to move beyond a static website and become a reusable system for demonstrating UX engineering, design systems, and frontend architecture."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2">
          {problemBullets.map((item) => (
            <Card key={item} className="rounded-(--card-radius) border-(--card-border)">
              <CardContent className="flex items-start gap-(--space-sm) pt-6">
                <Icon name="check" size="sm" className="mt-1 text-(--color-action-primary)" />
                <p className={bodyText}>{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Architecture"
          title="A layered token pipeline with stable component contracts."
          description="Each layer has a specific job, which keeps theme changes separate from component implementation details."
        />
        <div className="grid gap-(--space-sm) md:grid-cols-7">
          {architectureSteps.map((step, index) => (
            <Card
              key={step}
              className="relative rounded-(--card-radius) border-(--card-border) bg-(--card-background)"
            >
              <CardContent className="flex min-h-(--size-3xl) items-center justify-center p-(--space-md) text-center">
                <p className="text-(--card-title-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height)">
                  {step}
                </p>
                {index < architectureSteps.length - 1 ? (
                  <Icon
                    name="arrow-right"
                    size="sm"
                    className="absolute -right-(--space-sm) top-1/2 z-(--z-index-raised) hidden -translate-y-1/2 text-(--color-text-muted) md:block"
                    ariaLabel={`Flows from ${step} to ${architectureSteps[index + 1]}`}
                  />
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Token System"
          title="Foundations become semantic decisions, then component APIs."
          description="The token system covers visual foundations while allowing application code to consume stable semantic and component-level variables."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-4">
          {tokenCategories.map((category) => (
            <TokenCard key={category.name} title={category.name}>
              {category.description}
            </TokenCard>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Theme System"
          title="Four theme states from one component contract."
          description="The system supports Default Light, Default Dark, Brown Light, and Brown Dark without Tailwind dark-mode utilities."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2 lg:grid-cols-4">
          {themePreviews.map((theme) => (
            <Card
              key={theme.name}
              data-theme={theme.dataTheme}
              className={`${theme.className} rounded-(--card-radius) border-(--card-border) bg-(--color-background-page) text-(--color-text-primary)`}
            >
              <CardHeader>
                <CardTitle className={h3Text}>{theme.name}</CardTitle>
                <CardDescription className={bodyText}>
                  {theme.theme} · {theme.mode}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="md">
                  <div className="h-(--size-xl) rounded-(--card-radius) border border-(--color-border-default) bg-(--card-background)" />
                  <Inline>
                    <span className="size-(--size-sm) rounded-(--radius-sm) bg-(--button-default-background)" />
                    <span className="size-(--size-sm) rounded-(--radius-sm) bg-(--color-action-secondary)" />
                    <span className="size-(--size-sm) rounded-(--radius-sm) border border-(--color-border-default) bg-(--color-background-muted)" />
                  </Inline>
                  <p className={bodyText}>
                    Preview uses page, text, card, action, button, and border variables.
                  </p>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Component System"
          title="Reusable primitives own visual styling and accessibility contracts."
          description="Application features compose design-system components instead of duplicating color, spacing, and interaction rules."
        />
        <Card className="rounded-(--card-radius) border-(--card-border)">
          <CardContent className="pt-6">
            <Inline gap="md">
              <Button>Button</Button>
              <Badge>Badge</Badge>
              <Icon name="github" size="lg" ariaLabel="GitHub icon" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">
                    Dropdown Menu
                    <Icon name="chevron-down" size="sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Design System</DropdownMenuLabel>
                  <DropdownMenuItem>Theme tokens</DropdownMenuItem>
                  <DropdownMenuItem>Component tokens</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Accessible behavior</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Inline>
          </CardContent>
        </Card>
        <div className="grid gap-(--space-md) md:grid-cols-2">
          {componentSummaries.map((component) => (
            <Card key={component.name} className="rounded-(--card-radius) border-(--card-border)">
              <CardHeader>
                <CardTitle className={h3Text}>{component.name}</CardTitle>
                <CardDescription className={bodyText}>
                  {component.purpose}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap="sm">
                  <p className={bodyText}>
                    <span className="text-(--color-text-primary) font-(--text-style-caption-font-weight)">
                      Variants:
                    </span>{" "}
                    {component.variants}
                  </p>
                  <p className={bodyText}>
                    <span className="text-(--color-text-primary) font-(--text-style-caption-font-weight)">
                      Tokens consumed:
                    </span>{" "}
                    {component.tokens}
                  </p>
                  <p className={bodyText}>
                    <span className="text-(--color-text-primary) font-(--text-style-caption-font-weight)">
                      Accessibility:
                    </span>{" "}
                    {component.accessibility}
                  </p>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Runtime Implementation"
          title="Generated CSS variables become stable React component inputs."
          description="Style Dictionary generates token CSS. active-theme.css resolves the active theme. component-theme.css maps active theme values to component-level variables. React components consume stable CSS variables."
        />
        <Card className="rounded-(--card-radius) border-(--card-border)">
          <CardContent className="pt-6">
            <pre className="overflow-x-auto text-(--color-text-primary) text-[length:var(--text-style-mono-font-size)] font-(--text-style-mono-font-weight) leading-(--text-style-mono-line-height)">
              {runtimeFiles.join("\n")}
            </pre>
          </CardContent>
        </Card>
      </CaseStudySection>

      <CaseStudySection>
        <SectionHeader
          eyebrow="Key Tradeoffs"
          title="Selective tooling keeps the system practical."
        />
        <div className="grid gap-(--space-md) md:grid-cols-2">
          {tradeoffs.map((tradeoff) => (
            <Card key={tradeoff} className="rounded-(--card-radius) border-(--card-border)">
              <CardContent className="flex items-start gap-(--space-sm) pt-6">
                <Icon name="check" size="sm" className="mt-1 text-(--color-action-primary)" />
                <p className={bodyText}>{tradeoff}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="bg-(--color-background-surface)">
        <SectionHeader
          eyebrow="Outcome"
          title="The portfolio doubles as the live demo."
          description="The result is a portfolio that doubles as a working design system implementation. New sections, case studies, and components can be built from shared tokens and primitives instead of one-off styling."
        />
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
