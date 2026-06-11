import { Nav } from "./portfolio-sections/Nav";
import { Hero } from "./portfolio-sections/Hero";
import { About } from "./portfolio-sections/About";
import { CaseStudies } from "./portfolio-sections/CaseStudies";
import { Process } from "./portfolio-sections/Process";
import { Contact } from "./portfolio-sections/Contact";
import { DesignSystemCaseStudy } from "./features/case-studies/design-system/DesignSystemCaseStudy";
import { ComponentDeepDiveCaseStudy } from "./features/case-studies/component-deep-dive/ComponentDeepDiveCaseStudy";

function PortfolioHome() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Process />
        <Contact />
      </main>
    </>
  );
}

function getCurrentRoute() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const pathname = window.location.pathname;
  const route = basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname;

  return route.length > 1 ? route.replace(/\/$/, "") : route;
}

export default function App() {
  const route = getCurrentRoute();
  const caseStudyRoutes: Record<string, JSX.Element> = {
    "/case-studies/design-system": <DesignSystemCaseStudy />,
    "/design-system": <DesignSystemCaseStudy />,
    "/case-studies/component-deep-dive": <ComponentDeepDiveCaseStudy />,
  };

  return (
    <div className="min-h-screen bg-(--color-background-page) text-(--color-text-primary)">
      {caseStudyRoutes[route] ?? <PortfolioHome />}
    </div>
  );
}
