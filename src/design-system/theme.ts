export type ThemeName = "default" | "brown";
export type ColorMode = "light" | "dark";

export function setActiveTheme(theme: ThemeName, mode: ColorMode) {
  const root = document.documentElement;

  root.dataset.theme = theme;

  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}