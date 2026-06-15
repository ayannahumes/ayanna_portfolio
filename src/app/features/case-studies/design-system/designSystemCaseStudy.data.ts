const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const asset = (filename: string) =>
  `${baseUrl}case-studies/prism-ios/${filename}`;

export const designSystemCaseStudyLinks = {
  portfolio: baseUrl,
  caseStudy: `${baseUrl}case-studies/design-system`,
};

export const caseStudyTitle =
  "Reimagining Doordash's Design System";

export const openingSummary = [
  "As an iOS Design System Engineer on DoorDash's Design Infrastructure team — and the primary iOS contributor during a critical period of the system's rebuild — I led the migration of Prism's native mobile design system from UIKit to SwiftUI and introduced a dual-layer customization architecture that drove adoption from 40% to 95% across three products. I later presented this work at Figma Schema 2022 to an audience of design systems practitioners across the industry.",
  "The architectural patterns I established here — layered flexibility models, token-based theming, Figma-to-code tooling, and component API design — directly parallel how I approach design systems in React and web environments.",
];

export const problem = [
  "DoorDash's native iOS design system had only 40% adoption across three products — Consumer, Dasher, and Merchant. The root cause wasn't awareness. It was friction.",
  "The system was built on UIKit while the rest of the engineering org was moving to SwiftUI. More critically, there was no sanctioned way for product teams to customize components for their specific surfaces. When a team needed something the system didn't support, their only option was to build a new component from scratch using design system tokens — going around the system entirely rather than extending it. So that's what they did.",
  "The result: visual inconsistency across three products, duplicated UI work across teams, and a design system that product engineers had rational reasons to avoid.",
  "Accessibility coverage sat at 20%, creating both compliance risk and real barriers for users with disabilities. And there was no tooling to help engineers discover, understand, or integrate components without direct support from the design systems team.",
];

export const scope = [
  "I owned the iOS side of Prism end-to-end: component implementation and API design, accessibility patterns and testing infrastructure, developer tooling, Figma-to-code alignment, and client support across all three products simultaneously. During a key period of the system's rebuild I was the primary iOS contributor — responsible for the full surface area of the iOS system while also partnering closely with the design system designer on the cross-functional process.",
  "This was not a narrow implementation role. I was making architectural decisions, identifying gaps in the roadmap, driving tooling investments, and directly supporting the product engineers who depended on the system every day.",
];

export const architecture = [
  "The central design challenge was this: three different products, each with distinct visual identities, all needing to share the same component library without the system becoming a lowest-common-denominator solution that nobody wanted to use.",
  "I evaluated two approaches. A single flexible props model — adding more configuration to each component — would have worked for simple cases but created bloated component APIs and still wouldn't support the degree of visual variation Consumer, Dasher, and Merchant each required. A pure headless model would give maximum flexibility but create too high a barrier for teams with simpler customization needs.",
  "The decision: introduce both layers deliberately, for different use cases.",
  "For targeted overrides — when a team needed to change a specific element's appearance without touching the component's core behavior — I exposed SwiftUI view modifiers that allowed surgical, element-level customization. For teams building full product-specific variations, I introduced headless component architecture that fully separated logic from visual presentation, letting each product apply its own theme without forking the component.",
  "The goal was to reduce adoption friction as much as possible while still maintaining consistent theming support across all three products. Teams could choose the level of flexibility they needed. The system stayed coherent. Adoption followed.",
];

export const accessibility = [
  "When I audited Prism's iOS accessibility coverage, 80% of components had no accessibility support at all. The problem wasn't intentional neglect — there were no shared patterns, no testing infrastructure, and no definition of what \"accessible\" meant for a Prism component. Every team was making it up independently, or not doing it at all.",
  "I built the foundation from scratch. I established reusable accessibility patterns for SwiftUI that could be applied consistently across components, introduced accessibility-focused snapshot testing and UI testing so regressions would be caught automatically, and created a component criteria checklist that made accessibility a hard requirement before any component could ship — not an afterthought.",
  "Coverage went from 20% to 100%. The criteria checklist and catalog work also unlocked an external accessibility audit by Level Access — the first comprehensive audit of Prism iOS — which hadn't been structurally possible before the testing infrastructure existed.",
];

export const developerTooling = [
  "Early in the system's life, the only way for a product engineer to understand what Prism offered was to ask someone on the design systems team directly. That was a bottleneck — on the team, and on adoption.",
  "I built an interactive component catalog for Prism iOS — inspired by Storybook — that let engineers explore every component variant, its available customizations, and its configuration options in one place, without needing team support. Integration time for new engineers dropped by approximately 40%.",
  "I configured Figma Code Connect for the iOS library, writing annotations that surfaced production SwiftUI code directly in Figma's Dev Mode — so designers and engineers were looking at the same source of truth. I set up and maintained Supernova for iOS documentation, configuring pipelines and writing technical content that kept the system documented as it evolved.",
  "I also introduced AI-assisted development workflows to accelerate component implementation and documentation — using AI tooling to reduce the time from design spec to production-ready component.",
];

export const designToCode = [
  "I was the engineering partner in a cross-functional design-to-code process alongside the design system designer. In practice that meant participating in Design Direction documents, Design Review crit sessions, and component anatomy specs — and being the person who caught edge cases during review that wouldn't surface until implementation.",
  "Before Figma Code Connect, the gap between what lived in Figma and what shipped in code was invisible to most engineers. After I configured Code Connect for the iOS library, production SwiftUI implementations surfaced directly in Dev Mode — closing a handoff gap that had caused inconsistencies we were regularly debugging after the fact.",
];

export const quantityStepper = [
  "The Quantity Stepper is a useful lens into how I approach component work end-to-end — from architecture through performance engineering to developer enablement.",
  "Architecture: Built using the dual-layer model I introduced across Prism — view modifier overrides for targeted customization, headless architecture for full product-specific variation. Product teams could use the stepper as-is, override specific elements for their surface, or build a fully themed version for their product without touching the core component.",
  "Performance: After launch I identified a hitch rate problem on the store page. The stepper's state management was causing store item cells to reload unnecessarily during interactions — creating visible jank. I used Apple Instruments to profile the component, pinpointed the source of the unnecessary rerenders, and restructured the component's state so cells wouldn't reload when they didn't need to. I worked directly with a product engineer to validate the fix in context. The jank was eliminated entirely.",
  "Developer enablement: The component's extensible API allowed another product team to pick it up and extend it for a quick-add experiment — independently, without my involvement. That experiment generated $140k in incremental Gross Order Value over two weeks. A team being able to take a component, extend it for their use case, and ship a high-impact experiment on their own is exactly what a well-built design system should make possible.",
];

export const differently = [
  "The dual-layer customization model came in during the system revamp — not from day one. We did the initial UIKit-to-SwiftUI migration first, then introduced the headless architecture and view modifier pattern when we rebuilt. That meant some earlier components were touched twice, and there was a period where the system had inconsistent customization patterns depending on when a component was built.",
  "If I were doing it again I'd establish the architecture model before starting the migration — define the customization contract first, then build every component against it from the start. The sequencing cost us time we didn't have to spend.",
  "The other thing I'd do differently: I drove a significant portion of early adoption by manually updating component references in client codebases myself. It worked — adoption moved — but it created a bottleneck on me and wasn't sustainable. I'd invest earlier in automated migration tooling so teams could self-serve upgrades rather than depending on me to do it for them.",
];

export const figmaSchema = [
  "Presented this work at Figma Schema 2022 — Figma's annual conference for design systems practitioners — in a talk titled \"Creating DoorDash's Native Mobile Design System.\" Covered designer-engineer handoff workflows, component architecture, and strategies for scaling design system adoption across mobile teams.",
];

export const impactMetrics = [
  {
    value: "40→95%",
    label: "design system adoption across 3 products",
  },
  {
    value: "20→100%",
    label: "iOS accessibility coverage",
  },
  {
    value: "~40%",
    label: "reduction in engineer integration time",
  },
  {
    value: "$140k",
    label: "Gross Order Value enabled by Quantity Stepper extensibility",
  },
];

export const caseStudyImages = {
  hero: {
    src: asset("hero.png"),
    alt: "Prism Design System showing Consumer, Dasher, and Merchant product screens",
  },
  threeProducts: {
    src: asset("three-products.png"),
    alt: "Consumer, Dasher, and Merchant app screens side by side",
  },
  componentList: {
    src: asset("component-list.png"),
    alt: "Native mobile components list showing 40+ Prism components",
  },
  systemPillars: {
    src: asset("system-pillars.png"),
    alt: "Design system offering — Themes, Components, and Guidelines",
  },
  templateDoc: {
    src: asset("template-doc.png"),
    alt: "Component template file showing What is it and How could it work sections",
  },
  directionDoc: {
    src: asset("direction-doc.png"),
    alt: "Filled component Design Direction document",
  },
  namingGuide: {
    src: asset("naming-guide.png"),
    alt: "Detailed Design Component Ingredients naming convention guide",
  },
  directionSlides: {
    src: asset("direction-slides.png"),
    alt: "Design Direction Doc slide",
  },
  reviewSlide: {
    src: asset("review-slide.png"),
    alt: "Design Direction Design Review slide",
  },
  specs: {
    src: asset("specs.png"),
    alt: "Detailed Design Component Specs and Semantics",
  },
  listCell: {
    src: asset("list-cell.png"),
    alt: "List Cell Anatomy, Specs, and Examples three-panel Figma view",
  },
  zoom: {
    src: asset("zoom.png"),
    alt: "Design Review session with cross-functional team",
  },
  stepper: {
    src: asset("stepper.png"),
    alt: "Design Direction Design Review showing Button and Quantity Stepper components",
  },
  conference: {
    src: asset("conference.png"),
    alt: "Button Specs and Button Examples shown at Figma Schema 2022 conference presentation",
  },
};
