const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const designSystemCaseStudyLinks = {
  readme: "#github-readme-placeholder",
  figma: "#figma-placeholder",
  portfolio: baseUrl,
  caseStudy: `${baseUrl}case-studies/design-system`,
};

export const metadataBadges = [
  "React",
  "TypeScript",
  "Style Dictionary",
  "CSS Variables",
  "Radix UI",
  "Tailwind Layout Utilities",
];

export const problemBullets = [
  "Needed consistent visual language",
  "Needed multi-theme support",
  "Needed reusable components",
  "Needed token-driven styling",
  "Needed clean separation between app code and design system code",
];

export const architectureSteps = [
  "Primitive Tokens",
  "Semantic Tokens",
  "Theme Tokens",
  "Component Tokens",
  "Style Dictionary",
  "Generated CSS Variables",
  "React Components",
];

export const tokenCategories = [
  {
    name: "Color",
    description:
      "Primitive, semantic, theme, and component layers support default and brown themes across light and dark modes.",
  },
  {
    name: "Dimension",
    description:
      "Shared sizing, spacing, radius, and border-width scales keep layout rhythm consistent without hardcoded values.",
  },
  {
    name: "Typography",
    description:
      "Text styles package font size, weight, line height, and letter spacing into reusable roles.",
  },
  {
    name: "Motion",
    description:
      "Duration and easing tokens keep interactions consistent across components and theme surfaces.",
  },
  {
    name: "Elevation",
    description:
      "Shadow tokens define depth for cards, overlays, dropdowns, and other raised surfaces.",
  },
  {
    name: "Opacity",
    description:
      "Opacity tokens standardize disabled, overlay, and subtle-state treatments.",
  },
  {
    name: "Z-Index",
    description:
      "Layer tokens define predictable stacking for sticky navigation, dropdowns, modals, toasts, and overlays.",
  },
  {
    name: "Breakpoints",
    description:
      "Breakpoint tokens document responsive decisions and align code with design-system vocabulary.",
  },
];

export const themePreviews = [
  {
    name: "Default Light",
    mode: "Light",
    theme: "Default",
    className: "",
    dataTheme: "default",
  },
  {
    name: "Default Dark",
    mode: "Dark",
    theme: "Default",
    className: "dark",
    dataTheme: "default",
  },
  {
    name: "Brown Light",
    mode: "Light",
    theme: "Brown",
    className: "",
    dataTheme: "brown",
  },
  {
    name: "Brown Dark",
    mode: "Dark",
    theme: "Brown",
    className: "dark",
    dataTheme: "brown",
  },
];

export const componentSummaries = [
  {
    name: "Button",
    purpose: "Primary action component for navigation, contact, and task completion.",
    variants: "Default, secondary, outline, ghost, link, destructive, and icon sizes.",
    tokens:
      "Background, text, border, hover state, radius, spacing, size, typography, and motion.",
    accessibility:
      "Uses native button or accessible link semantics through asChild while preserving focus states.",
  },
  {
    name: "Badge",
    purpose: "Compact metadata display for tech stacks, status, and category labels.",
    variants: "Default, secondary, outline, and destructive.",
    tokens: "Background, text, border, radius, spacing, and caption typography.",
    accessibility:
      "Keeps labels textual so color is never the only signal.",
  },
  {
    name: "Card",
    purpose: "Reusable surface for grouped content, summaries, and previews.",
    variants: "Composable header, content, footer, title, description, and action slots.",
    tokens: "Background, text, border, radius, elevation, content spacing, and typography.",
    accessibility:
      "Provides structure without forcing heading levels, so pages can keep semantic order.",
  },
  {
    name: "Icon",
    purpose: "Design-system abstraction over lucide-react.",
    variants: "Named icons with xs, sm, md, lg, and xl sizes.",
    tokens: "Consumes inherited currentColor and centralized design-system size mapping.",
    accessibility:
      "Decorative icons are hidden; labeled icons receive role and aria-label.",
  },
  {
    name: "Dropdown Menu",
    purpose: "Accessible menu primitive for settings, theme selection, and compact actions.",
    variants: "Items, labels, separators, checkbox items, radio items, and submenus.",
    tokens:
      "Surface, text, muted text, focused item state, separator, radius, shadow, and z-index.",
    accessibility:
      "Radix owns keyboard behavior, roving focus, escape handling, and menu semantics.",
  },
];

export const tradeoffs = [
  "Tailwind is retained for layout utilities, while visual styling is owned by the design system.",
  "Radix is used for accessible behavior primitives, while custom components own visual styling.",
  "Style Dictionary is used instead of a custom compiler to mirror enterprise token workflows.",
  "The portfolio itself acts as the live demo instead of creating a separate playground.",
];

export const runtimeFiles = [
  "src/design-system/",
  "├── tokens/",
  "├── tokens/generated/",
  "├── runtime/",
  "│   ├── active-theme.css",
  "│   ├── component-theme.css",
  "│   └── base.css",
  "├── components/",
  "└── icons/",
];
