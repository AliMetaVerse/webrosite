"use client";

import { useCallback, useSyncExternalStore } from "react";

export type ThemeId = "editorial" | "cinematic" | "swiss";

export const THEMES: {
  id: ThemeId;
  name: string;
  hint: string;
  swatch: [string, string, string];
}[] = [
  {
    id: "editorial",
    name: "Editorial Light",
    hint: "Bright, refined, premium",
    swatch: ["#ffffff", "#0a857f", "#101828"],
  },
  {
    id: "cinematic",
    name: "Cinematic Dark",
    hint: "Dark, glowing, modern",
    swatch: ["#080b12", "#2cc2b8", "#9472ff"],
  },
  {
    id: "swiss",
    name: "Swiss Corporate",
    hint: "Calm, structured, editorial",
    swatch: ["#fbfaf7", "#161616", "#0c6a67"],
  },
];

export const STORAGE_KEY = "wbpl-design-theme";
export const DEFAULT_THEME: ThemeId = "editorial";
const EVENT = "wbpl-theme-change";

/** Runs before paint (injected in <head>) so the page never flashes the
 *  wrong theme. Kept as a self-contained string with no external references. */
export const themeBootScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='editorial'&&t!=='cinematic'&&t!=='swiss'){t='${DEFAULT_THEME}';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='${DEFAULT_THEME}';}})();`;

function isTheme(v: string | undefined): v is ThemeId {
  return v === "editorial" || v === "cinematic" || v === "swiss";
}

/* The <html data-theme> attribute is the single source of truth; the store
   just subscribes the React tree to changes of it. */
function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback); // keep other tabs in sync
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ThemeId {
  const t = document.documentElement.dataset.theme;
  return isTheme(t) ? t : DEFAULT_THEME;
}

function getServerSnapshot(): ThemeId {
  return DEFAULT_THEME;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((t: ThemeId) => {
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* storage unavailable — theme still applies for the session */
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return { theme, setTheme };
}
