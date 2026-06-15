import { useEffect, useState } from "react";
import { Nav } from "./portfolio-sections/Nav";
import { Hero } from "./portfolio-sections/Hero";
import { About } from "./portfolio-sections/About";
import { CaseStudies } from "./portfolio-sections/CaseStudies";
import { Contact } from "./portfolio-sections/Contact";
import { DesignSystemCaseStudy } from "./features/case-studies/design-system/DesignSystemCaseStudy";
import { ComponentDeepDiveCaseStudy } from "./features/case-studies/component-deep-dive/ComponentDeepDiveCaseStudy";
import { GenerativeUiCaseStudy } from "./features/case-studies/generative-ui/GenerativeUiCaseStudy";
import {
  setActiveTheme,
  type ColorMode,
  type ThemeName,
} from "@/design-system/theme";

const THEME_STORAGE_KEY = "portfolio-theme";
const MODE_STORAGE_KEY = "portfolio-color-mode";

function getStoredTheme(): ThemeName {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === "brown" || storedTheme === "default"
    ? storedTheme
    : "default";
}

function getStoredMode(): ColorMode {
  const storedMode = window.localStorage.getItem(MODE_STORAGE_KEY);
  return storedMode === "dark" || storedMode === "light" ? storedMode : "light";
}

function PortfolioHome({
  theme,
  mode,
  setTheme,
  setMode,
}: {
  theme: ThemeName;
  mode: ColorMode;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ColorMode) => void;
}) {
  useEffect(() => {
    if (!window.location.hash) return;

    const scrollToHash = () => {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    window.requestAnimationFrame(scrollToHash);
  }, []);

  return (
    <>
      <Nav theme={theme} mode={mode} setTheme={setTheme} setMode={setMode} />
      <main>
        <Hero />
        <CaseStudies />
        <Contact />
      </main>
    </>
  );
}

function AboutPage({
  theme,
  mode,
  setTheme,
  setMode,
}: {
  theme: ThemeName;
  mode: ColorMode;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ColorMode) => void;
}) {
  return (
    <>
      <Nav theme={theme} mode={mode} setTheme={setTheme} setMode={setMode} />
      <main className="pt-16">
        <About />
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
  const [theme, setTheme] = useState<ThemeName>(getStoredTheme);
  const [mode, setMode] = useState<ColorMode>(getStoredMode);
  const route = getCurrentRoute();
  const caseStudyRoutes: Record<string, JSX.Element> = {
    "/case-studies/generative-ui": <GenerativeUiCaseStudy />,
    "/case-studies/design-system": <DesignSystemCaseStudy />,
    "/design-system": <DesignSystemCaseStudy />,
    "/case-studies/component-deep-dive": <ComponentDeepDiveCaseStudy />,
  };

  useEffect(() => {
    setActiveTheme(theme, mode);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    window.localStorage.setItem(MODE_STORAGE_KEY, mode);
  }, [theme, mode]);

  return (
    <div className="min-h-screen bg-(--color-background-page) text-(--color-text-primary)">
      {caseStudyRoutes[route] ?? (
        route === "/about" ? (
          <AboutPage
            theme={theme}
            mode={mode}
            setTheme={setTheme}
            setMode={setMode}
          />
        ) : (
          <PortfolioHome
            theme={theme}
            mode={mode}
            setTheme={setTheme}
            setMode={setMode}
          />
        )
      )}
    </div>
  );
}
