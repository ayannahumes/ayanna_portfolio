import { useState, useEffect } from "react";
import { Menu, X, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  setActiveTheme,
  type ThemeName,
  type ColorMode,
} from "@/design-system/theme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeName>("default");
  const [mode, setMode] = useState<ColorMode>("light");

  useEffect(() => {
    setActiveTheme(theme, mode);
  }, [theme, mode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-foreground font-semibold tracking-tight text-sm"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Ayanna Humes
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLink(link.href)}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <Button
          size="sm"
          className="hidden md:inline-flex"
          onClick={() => handleLink("#contact")}
        >
          Get in touch
        </Button>
        
        {/* Theme toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>

            <button aria-label="Open settings">

              <Settings size={18} />

            </button>

          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">

            <DropdownMenuLabel>Theme</DropdownMenuLabel>

            <DropdownMenuItem onClick={() => setTheme("default")}>

              Default

            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("brown")}>

              Brown

            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Mode</DropdownMenuLabel>

            <DropdownMenuItem onClick={() => setMode("light")}>

              Light

            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setMode("dark")}>

              Dark

            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-border px-6 pb-4">
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  className="w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button
                size="sm"
                className="w-full"
                onClick={() => handleLink("#contact")}
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
