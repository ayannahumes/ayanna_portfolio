import { useEffect, useState } from "react";
import { Icon } from "@/design-system/icons";
import { Button } from "@/design-system/components/button";
import { cn } from "@/design-system/components/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/design-system/components/dropdown-menu";
import type { ColorMode, ThemeName } from "@/design-system/theme";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const navLinks = [
  { label: "Case Studies", href: `${baseUrl}#case-studies`, section: "#case-studies" },
  { label: "About", href: `${baseUrl}about` },
  { label: "Contact", href: `${baseUrl}contact` },
];

export function Nav({
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string, section?: string) => {
    setMobileOpen(false);
    if (section) {
      const el = document.querySelector(section);
      if (el) {
        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
        return;
      }
    }

    window.location.href = href;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-(--color-background-page)/90 backdrop-blur-md border-b border-(--color-border-default) shadow-(--card-shadow)"
          : "bg-transparent",
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-(--button-shape-radius) focus:bg-(--button-default-background) focus:px-4 focus:py-2 focus:text-(--button-default-text)"
      >
        Skip to main content
      </a>
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href={baseUrl}
          className="rounded-(--button-shape-radius) text-(--color-text-primary) text-[length:var(--text-style-body-font-size)] font-(--text-style-h3-font-weight) leading-(--text-style-body-line-height) tracking-(--text-style-body-letter-spacing) focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-(--color-border-focus)/50"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = baseUrl;
          }}
        >
          Ayanna Humes
        </a>

        {/* Desktop links — centered, spread across the available width */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-10 lg:gap-16">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href, link.section)}
                className="px-3 py-1.5 text-(--button-ghost-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) transition-colors rounded-(--button-shape-radius) hover:bg-(--button-ghost-background-hover) hover:text-(--color-text-primary) focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-(--color-border-focus)/50"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions — Get in touch sits next to settings */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => handleLink(`${baseUrl}contact`)}
          >
            Get in touch
          </Button>

          {/* Theme toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Open settings"
                className="rounded-(--button-shape-radius) p-2 text-(--button-ghost-text) transition-colors hover:bg-(--button-ghost-background-hover) hover:text-(--color-text-primary) focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-(--color-border-focus)/50"
              >
                <Icon name="settings" size="md" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>

              <DropdownMenuItem disabled={theme === "default"} onClick={() => setTheme("default")}>
                Default
              </DropdownMenuItem>

              <DropdownMenuItem disabled={theme === "brown"} onClick={() => setTheme("brown")}>Brown</DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuLabel>Mode</DropdownMenuLabel>

              <DropdownMenuItem disabled={mode === "light"} onClick={() => setMode("light")}>Light</DropdownMenuItem>

              <DropdownMenuItem disabled={mode === "dark"} onClick={() => setMode("dark")}>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-(--button-shape-radius) text-(--button-ghost-text) hover:bg-(--button-ghost-background-hover) transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-(--color-border-focus)/50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <Icon name="close" size="md" />
            ) : (
              <Icon name="menu" size="md" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-(--color-background-page)/95 backdrop-blur-md border-b border-(--color-border-default) px-6 pb-4">
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href, link.section)}
                  className="w-full text-left px-3 py-2.5 text-(--button-ghost-text) text-[length:var(--text-style-caption-font-size)] font-(--text-style-caption-font-weight) leading-(--text-style-caption-line-height) hover:text-(--color-text-primary) hover:bg-(--button-ghost-background-hover) rounded-(--button-shape-radius) transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-(--color-border-focus)/50"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button
                size="sm"
                className="w-full"
                onClick={() => handleLink(`${baseUrl}contact`)}
              >
                Get in touch
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
