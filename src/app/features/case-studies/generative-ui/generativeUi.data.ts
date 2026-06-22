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
  "Next.js",
  "Generative UI",
  "Internal Tooling",
  "Platform Debugging",
  "Developer Experience",
  "AI-Assisted Development",
];
