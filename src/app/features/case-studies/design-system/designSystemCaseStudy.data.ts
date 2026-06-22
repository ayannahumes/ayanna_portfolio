const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const asset = (filename: string) =>
  `${baseUrl}case-studies/prism-ios/${filename}`;

export const designSystemCaseStudyLinks = {
  portfolio: baseUrl,
  caseStudy: `${baseUrl}case-studies/design-system`,
};

export const caseStudyTitle = "Design System Reimagined";

export const heroSummary =
  "Engineers were leaving the design system every time a design deviated from the default. Headless components fixed that.";

export const tags = [
  "Systems Architecture",
  "SwiftUI",
  "Headless Components",
  "Design-to-Code",
  "Developer Experience",
  "Accessibility",
  "Figma Code Connect",
  "Supernova",
];

export const projectDetails: {
  label: string;
  value: string;
  span?: "wide" | "two";
}[] = [
  { label: "Role", value: "Design System Engineer" },
  { label: "Timeline", value: "2021 – 2025" },
  { label: "Platform", value: "iOS · 3 products" },
  {
    label: "Team",
    value:
      "2 iOS · 2 Android · 3 Web engineers · 4 designers · motion designer · PM · EM",
    span: "two",
  },
  { label: "Key users", value: "Product engineers" },
  {
    label: "Tools",
    value:
      "SwiftUI · Xcode · Figma · Figma Code Connect · Supernova · Snapshot Testing · UI Testing · Maestro · CI/CD",
    span: "wide",
  },
];

export const impactMetrics = [
  {
    value: "40→95%",
    label: "Adoption",
    description: "Design system coverage across three products",
  },
  {
    value: "~40%",
    label: "Onboarding",
    description: "Reduction in engineer integration time",
  },
  {
    value: "20→100%",
    label: "Accessibility",
    description: "Coverage across the iOS design system",
  },
  {
    value: "−0.8%",
    label: "Hitch rate",
    description: "Smoother scrolling across the app at scale",
  },
];

export const problem = [
  "When designs deviated from the default, engineers had two options: request a variant that didn't belong at scale, or build a one-off and leave the system. Most chose the latter. That meant losing accessibility, dark mode, and token consistency.",
];

export const problemCallout =
  "The system couldn't absorb every product variant. But engineers couldn't keep building outside it. Those two constraints needed one answer.";

export const problemClosing = [
  "With server-driven UI becoming a platform priority, components outside the system also couldn't be controlled from the backend. Every one-off became a blocker to cross-platform experimentation.",
];

export const approachIntro = [
  "The web team was already solving this with headless components. We translated the pattern to SwiftUI using the ButtonStyle protocol. Engineers get full visual flexibility while inheriting accessibility, dark mode, and tokens by default.",
];

export const approachListCell = [
  "The list cell was the hardest component, because SwiftUI's generics pushed back hard. Solving it first proved the pattern. My teammate and I split the remaining 40+ components and worked in parallel.",
];

export const pipeline = [
  "Documentation was manual. I hit 100% coverage by hand and watched it go stale before I finished. Supernova generates docs from code automatically. Figma Code Connect puts specs alongside implementation in Dev Mode.",
];

export const outcome = [
  "Adoption grew from 40% to 95%, and accessibility from 20% to 100%. Not through a remediation sprint, but because the architecture made correct behavior the default.",
  "New engineer integration time dropped ~40%. The interactive component catalog, a Storybook equivalent for native iOS, meant engineers could find, understand, and ship without asking anyone.",
];

export const roleIntro = [
  "One of two iOS engineers on a cross-platform team of seven. Led some parts, supported others.",
];

export const roleOwned = [
  "Headless component pattern, introduced and translated from web to iOS",
  "List cell and button implementations that proved the architecture",
  "Interactive component catalog, a Storybook equivalent for native iOS",
  "Accessibility coverage foundations, 20% → 100%",
  "Figma Code Connect integration and Maestro testing support",
];

export const roleDrove = [
  "SwiftUI migration across 40+ components",
  "Token pipeline overhaul and Tokens 2.0 migration",
  "Supernova documentation infrastructure",
  "Adoption strategy, 40% → 95%",
  "Presented to platform org and iOS org on completion",
];

export const reflections = [
  {
    number: "01",
    text: "Measure velocity, not coverage. How fast new engineers reached full adoption would have surfaced onboarding friction sooner than tracking component count.",
  },
  {
    number: "02",
    text: "One reference implementation before migrating everything. Two architectures coexisting in the SDK created ambiguity during the transition.",
  },
  {
    number: "03",
    text: "The pipeline work was a trust prerequisite, not just a technical one. The technical and human problems have to be solved together.",
  },
];

export const caseStudyImages = {
  hero: {
    src: asset("dd-card.jpg"),
    alt: "DoorDash design system components arranged on a soft red background, including timeline, switches, quantity stepper, navigation bar, typography, buttons, checkboxes, and a date picker",
  },
  productUi: {
    src: asset("Dasher_app_list_cell.png"),
    alt: "Dasher app list cells in dark mode, real product UI that needed to work across dark mode, multiple layouts, and three surfaces without engineers rebuilding it every time",
  },
  collab: {
    src: asset("zoom.png"),
    alt: "Cross-functional design review session showing the back and forth between design and engineering teams",
  },
  headless: {
    src: asset("web_and_ios_arch.png"),
    alt: "Side-by-side architecture diagram comparing the web React HeadlessListItem, which exposes logic through render props, with the iOS SwiftUI ListCell, which uses the ButtonStyle protocol. Both expose Leading, Main, and Trailing slots applied per surface for Consumer, Dasher, and Merchant, and both inherit focus management, accessibility, tokens, and dark mode.",
    caption:
      "Same principle, different platform. Web uses render props for full UI control. iOS uses the ButtonStyle protocol with structured Leading, Main, and Trailing slots.",
  },
  listCell: {
    src: asset("list-cell.png"),
    alt: "List Cell anatomy, specs, and examples, the documentation covering the hardest component to translate to headless SwiftUI",
  },
  componentList: {
    src: asset("component-list.png"),
    alt: "Full list of native mobile components in Prism, 40+ components rebuilt with headless architecture",
    caption:
      "Left: List Cell documentation covering anatomy, specs, and platform-specific examples. Right: 40+ native mobile components, all rebuilt with headless architecture.",
  },
  pipeline: {
    src: asset("Automated_workflow.png"),
    alt: "Design-to-code pipeline diagram flowing from Figma as the design source, to Tokens Studio for token export, to Supernova for token transform and generated docs, to the iOS SDK headless components, and out to three products: Consumer, Dasher, and Merchant. A parallel automation layer shows Figma Code Connect keeping component specs alongside the SDK implementation in Dev Mode.",
    caption: "A token change in Figma reaches production without a handoff email.",
  },
  systemOffering: {
    src: asset("hero.png"),
    alt: "Prism Design System showing the Consumer, Dasher, and Merchant product screens, the three surfaces the system needed to support",
    caption:
      "One system, three products. Consumer, Dasher, and Merchant now build on the same rebuilt foundation.",
  },
};
