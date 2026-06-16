"use client";

import { useEffect, useRef, useState } from "react";
import { THEMES, useTheme, type ThemeId } from "./theme";
import { CheckIcon, PaletteIcon } from "./icons";

/**
 * Top-bar control for switching the site's design direction.
 * `variant="menu"` renders a compact dropdown (desktop nav);
 * `variant="inline"` renders the full list (mobile drawer).
 */
export function ThemeSwitcher({
  variant = "menu",
}: {
  variant?: "menu" | "inline";
}) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <div className="grid gap-2">
        {THEMES.map((t) => (
          <ThemeRow
            key={t.id}
            t={t}
            active={theme === t.id}
            onSelect={() => setTheme(t.id)}
          />
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change design theme"
        title="Change design theme"
        className="inline-flex items-center gap-2 rounded-btn px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-panel hover:text-fg"
      >
        <PaletteIcon className="text-base" />
        <span className="hidden xl:inline">Theme</span>
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-72 rounded-card border border-line bg-card p-2 shadow-card"
        >
          <p className="px-3 pb-2 pt-1.5 text-xs font-semibold uppercase tracking-wider text-faint">
            Design direction
          </p>
          {THEMES.map((t) => (
            <ThemeRow
              key={t.id}
              t={t}
              active={theme === t.id}
              onSelect={() => {
                setTheme(t.id);
                setOpen(false);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ThemeRow({
  t,
  active,
  onSelect,
}: {
  t: (typeof THEMES)[number];
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={active}
      onClick={onSelect}
      className={`flex w-full items-center gap-3 rounded-btn px-3 py-2.5 text-left transition-colors ${
        active ? "bg-panel" : "hover:bg-panel"
      }`}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center overflow-hidden rounded-md ring-1 ring-line"
        aria-hidden
      >
        {t.swatch.map((c, i) => (
          <span
            key={i}
            className="h-full flex-1"
            style={{ background: c }}
          />
        ))}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-fg">{t.name}</span>
        <span className="block text-xs text-faint">{t.hint}</span>
      </span>
      {active ? (
        <CheckIcon className="text-base text-brand-text" />
      ) : (
        <span className="w-4" />
      )}
    </button>
  );
}

export type { ThemeId };
