const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const generativeUiLinks = {
  demo: "#demo-preview",
  github: "#github-generative-ui-placeholder",
  portfolio: baseUrl,
  caseStudy: `${baseUrl}case-studies/generative-ui`,
};

export const generativeUiBadges = [
  "React",
  "TypeScript",
  "Generative UI",
  "Decision Trees",
  "Platform UX",
  "Debugging Workflows",
  "System Visualization",
];

export const problemBullets = [
  {
    title: "Decision logic was opaque",
    description:
      "Teams could see the outcome, but not always the chain of decisions that produced it.",
  },
  {
    title: "Debugging required too much tribal knowledge",
    description:
      "Investigations depended on knowing where logic lived and which signals mattered.",
  },
  {
    title: "System behavior was hard to explain across teams",
    description:
      "Platform, product, design, and operations teams needed a shared model of what happened.",
  },
  {
    title: "Teams lacked a visual model of the pipeline",
    description:
      "Decision points were distributed across the delivery flow instead of represented as one inspectable path.",
  },
  {
    title: "Investigation workflows were slow and fragmented",
    description:
      "Engineers had to move between logs, assumptions, and code paths before finding the relevant rule.",
  },
];

export const audiences = [
  {
    title: "Platform engineers",
    description:
      "Needed visibility into how rules, state, and dependencies shaped a final platform decision.",
  },
  {
    title: "Product engineers",
    description:
      "Needed to understand why a customer-facing experience appeared, disappeared, or changed.",
  },
  {
    title: "Designers",
    description:
      "Needed a clearer model of system constraints so experience states could be designed responsibly.",
  },
  {
    title: "Product managers",
    description:
      "Needed explainable behavior for prioritization, incident review, and cross-team decision-making.",
  },
  {
    title: "Operators",
    description:
      "Needed fast, contextual guidance when debugging customer-facing affordability behavior.",
  },
];

export const solutionFeatures = [
  {
    title: "Decision tree visualization",
    description:
      "Represented branching platform logic as an inspectable path instead of a hidden backend process.",
  },
  {
    title: "System state summaries",
    description:
      "Condensed relevant state into a readable explanation before users inspected the details.",
  },
  {
    title: "Step-by-step reasoning",
    description:
      "Explained which conditions passed, failed, or needed more context.",
  },
  {
    title: "Interactive inspection",
    description:
      "Let users drill into rule groups and decision points without losing the larger flow.",
  },
  {
    title: "Contextual explanations",
    description:
      "Adapted supporting copy to the selected scenario, system state, and user intent.",
  },
  {
    title: "Debugging handoff support",
    description:
      "Turned investigation context into a clearer summary for cross-team follow-up.",
  },
];

export const systemFlowSteps = [
  "Input Scenario",
  "Platform Decision Logic",
  "Decision Tree",
  "Generative Explanation Layer",
  "Debugging Recommendation",
];

export const uiPatternComparison = [
  {
    title: "Static dashboard",
    description:
      "Shows fixed metrics and tables. Useful for monitoring, but less helpful when a user needs a contextual explanation of why a decision happened.",
  },
  {
    title: "Generative UI",
    description:
      "Adapts the interface based on context, system state, and user intent. Useful when debugging requires explanation, not just observation.",
  },
];

export const prototypeAnatomy = [
  {
    title: "Scenario Input",
    purpose: "Define the condition or customer journey being investigated.",
    interaction: "Select or configure a synthetic debugging scenario.",
    value: "Starts the investigation from a concrete, shareable context.",
  },
  {
    title: "Decision Tree Viewer",
    purpose: "Show the path through platform logic.",
    interaction: "Inspect branches, passed rules, failed rules, and skipped paths.",
    value: "Makes complex decision behavior visible without requiring code tracing.",
  },
  {
    title: "Rule Inspector",
    purpose: "Expose the details behind a selected decision point.",
    interaction: "Open a rule to review inputs, state, and evaluated conditions.",
    value: "Reduces guesswork and supports deeper engineering investigation.",
  },
  {
    title: "Generated Explanation",
    purpose: "Translate structured system state into readable reasoning.",
    interaction: "View context-aware explanation for the selected decision path.",
    value: "Helps teams discuss behavior without losing technical accuracy.",
  },
  {
    title: "Debugging Summary",
    purpose: "Capture the current finding in a portable format.",
    interaction: "Review the generated summary of key signals and decision outcomes.",
    value: "Improves handoff between platform, product, and operations teams.",
  },
  {
    title: "Recommended Next Step",
    purpose: "Suggest a practical follow-up based on the visible state.",
    interaction: "Review the surfaced recommendation and supporting rationale.",
    value: "Turns observation into action while preserving human review.",
  },
];

export const technicalArchitectureSteps = [
  "Mock Platform Data",
  "Decision Model",
  "State Interpreter",
  "Generative UI Renderer",
  "Interactive Debugging Surface",
];

export const demoStates = [
  "Scenario selected",
  "Decision path highlighted",
  "Rule explanation generated",
  "Debugging recommendation surfaced",
];

export const uxEngineeringDecisions = [
  "Translated backend/platform logic into a visual mental model",
  "Prioritized progressive disclosure over showing every rule at once",
  "Used interactive diagrams to reduce cognitive load",
  "Separated system state from generated explanation",
  "Designed for engineers without hiding complexity",
  "Used synthetic data to make the concept portfolio-safe",
];

export const lessonsLearned = [
  "Generative UI is most useful when grounded in structured system state",
  "Visualizing decision logic can reduce debugging complexity",
  "The interface should explain without pretending the system is simpler than it is",
  "Prototype work can validate interaction models before full platform investment",
];
