const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const componentDeepDiveLinks = {
  figma: "#figma-component-placeholder",
  github: "#github-component-placeholder",
  portfolio: baseUrl,
  caseStudy: `${baseUrl}case-studies/component-deep-dive`,
};

export const componentDeepDiveBadges = [
  "React",
  "TypeScript",
  "Figma",
  "Code Connect",
  "Dev Mode",
  "Accessibility",
  "Design Systems",
];

export const problemChallenges = [
  {
    title: "Inconsistent implementation",
    description:
      "Teams recreate the same component decisions differently when design intent is not explicit.",
  },
  {
    title: "Design drift",
    description:
      "Figma components and production components slowly diverge as products and themes evolve.",
  },
  {
    title: "Documentation maintenance",
    description:
      "Docs lose trust when they describe an ideal component instead of the component people actually ship.",
  },
  {
    title: "Handoff friction",
    description:
      "Developers spend extra time translating visual specs into props, tokens, states, and behavior.",
  },
  {
    title: "Accessibility regressions",
    description:
      "Keyboard, focus, semantics, and contrast requirements become easier to miss when they are not part of the component contract.",
  },
];

export const workflowSteps = [
  {
    title: "Figma Component",
    purpose: "Capture design intent as variants, states, and reusable design properties.",
    inputs: "Visual design, interaction states, token references, accessibility notes.",
    outputs: "A governed component source designers can reuse consistently.",
  },
  {
    title: "Documentation",
    purpose: "Explain when and how the component should be used.",
    inputs: "Usage guidance, anatomy, dos and don'ts, keyboard behavior, content rules.",
    outputs: "A shared reference for designers, engineers, and reviewers.",
  },
  {
    title: "Code Connect",
    purpose: "Map design variants and properties to production component APIs.",
    inputs: "Figma component IDs, prop names, examples, links to source code.",
    outputs: "Dev Mode snippets that point developers toward the right implementation.",
  },
  {
    title: "React Component",
    purpose: "Encode the component API, accessibility behavior, and token-driven styling.",
    inputs: "Design tokens, Radix behavior primitives when needed, TypeScript props.",
    outputs: "A reusable implementation with stable variants, states, and composition rules.",
  },
  {
    title: "Production Experience",
    purpose: "Use the component in real product surfaces and validate the contract under pressure.",
    inputs: "App requirements, responsive layouts, real content, theme switching.",
    outputs: "A component that proves its reliability through actual usage.",
  },
];

export const componentAnatomy = {
  name: "Button",
  description:
    "The button is small enough to inspect deeply, but important enough to reveal the full design-to-code contract: variants, states, tokens, semantics, and developer ergonomics.",
  variants: ["Default", "Secondary", "Ghost", "Destructive", "Outline", "Link"],
  states: ["Default", "Hover", "Focus", "Disabled", "Loading"],
  tokens: [
    "Background",
    "Text",
    "Border",
    "Hover state",
    "Radius",
    "Spacing",
    "Size",
    "Typography",
    "Motion",
  ],
  accessibility: [
    "Keyboard reachable by default",
    "Visible focus state",
    "Disabled state communicates behavior",
    "Icon-only usage requires an accessible name",
    "Link-styled buttons preserve correct semantics with composition",
  ],
};

export const designSpecItems = [
  {
    title: "Spacing",
    description:
      "Defines padding, icon gaps, and density so each size feels intentional across layouts.",
  },
  {
    title: "Typography",
    description:
      "Specifies text style, weight, line height, and alignment so labels remain readable.",
  },
  {
    title: "Color",
    description:
      "Maps states to semantic and component tokens instead of static color values.",
  },
  {
    title: "Elevation",
    description:
      "Documents when a component should feel flat, raised, or layered above surrounding UI.",
  },
  {
    title: "Motion",
    description:
      "Captures transition timing and easing for hover, focus, open, close, and loading feedback.",
  },
  {
    title: "Accessibility",
    description:
      "Records keyboard behavior, screen-reader expectations, contrast, and semantic requirements.",
  },
];

export const codeConnectFlow = [
  "Figma Component",
  "Code Connect Mapping",
  "React Component",
];

export const codeConnectExamples = [
  {
    title: "Variant Mapping",
    description:
      "Design variants such as Default, Secondary, Ghost, and Destructive map to typed React variant props.",
  },
  {
    title: "Property Mapping",
    description:
      "Design properties like label, leading icon, trailing icon, disabled, and size become predictable implementation inputs.",
  },
  {
    title: "Documentation Links",
    description:
      "Dev Mode can point engineers to usage rules, accessibility notes, source code, and examples.",
  },
];

export const codeSnippet = [
  "figma.connect(Button, figmaComponentUrl, {",
  "  props: {",
  "    variant: figma.enum('Variant', {",
  "      Default: 'default',",
  "      Secondary: 'secondary',",
  "      Ghost: 'ghost',",
  "      Destructive: 'destructive',",
  "    }),",
  "    size: figma.enum('Size', { Small: 'sm', Medium: 'default', Large: 'lg' }),",
  "    children: figma.string('Label'),",
  "  },",
  "  example: ({ variant, size, children }) => (",
  "    <Button variant={variant} size={size}>{children}</Button>",
  "  ),",
  "});",
];

export const accessibilityTopics = [
  {
    title: "Keyboard Navigation",
    description:
      "Components need predictable tab order, activation behavior, escape behavior, and roving focus where appropriate.",
  },
  {
    title: "Focus States",
    description:
      "Focus styling is a design token decision, not an afterthought added after implementation.",
  },
  {
    title: "Screen Reader Support",
    description:
      "Names, roles, states, and descriptions must be part of the component API and documentation.",
  },
  {
    title: "Color Contrast",
    description:
      "Variants and states need contrast checks across default and brown themes in light and dark modes.",
  },
  {
    title: "Semantic HTML",
    description:
      "Composition should preserve correct button, link, menu, and heading semantics in production.",
  },
];

export const apiDesignItems = [
  {
    title: "Variant Props",
    description:
      "Expose product-relevant choices without leaking implementation class names into feature code.",
  },
  {
    title: "Size Props",
    description:
      "Centralize density decisions so teams do not invent spacing and height rules per screen.",
  },
  {
    title: "State Props",
    description:
      "Represent disabled, loading, selected, and invalid states through explicit component contracts.",
  },
  {
    title: "Composition",
    description:
      "Allow components to render as buttons, links, or Radix slots while keeping visual styling stable.",
  },
];

export const engineeringArchitectureSteps = [
  "Primitive Tokens",
  "Semantic Tokens",
  "Theme Tokens",
  "Component Tokens",
  "React Component",
];

export const lessonsLearned = [
  "Not every component needs Code Connect; start with high-traffic primitives and patterns that cause repeated handoff questions.",
  "Use Radix when behavior is complex or accessibility-critical, and custom implementations when the component is mostly visual.",
  "Accessibility influences API design because the right prop contract can prevent invalid usage before it ships.",
  "Design documentation ages over time, so the healthiest docs stay close to tokens, component APIs, and production examples.",
  "Developer experience impacts adoption; teams reuse components when the correct path is also the easiest path.",
];
