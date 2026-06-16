"use client";

import type { Widget } from "./widgets";

// A browser-local override of the build-time data/widgets.json. Because the
// site is a static GitHub Pages export, there is no server to persist edits to.
// This lets you add/edit snippets and see them live in YOUR browser for testing
// without a commit + rebuild. To publish for every visitor, use "Copy config
// JSON" and commit it to data/widgets.json.

const STORAGE_KEY = "wbpl-widgets";
// Fires on same-tab saves; the native "storage" event covers other tabs.
const CHANGE_EVENT = "wbpl-widgets-changed";

function normalize(value: unknown): Widget[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((w): w is Record<string, unknown> => !!w && typeof w === "object")
    .map((w) => ({
      id: String(w.id ?? ""),
      name: String(w.name ?? ""),
      code: String(w.code ?? ""),
      enabled: Boolean(w.enabled),
    }))
    .filter((w) => w.id);
}

// Returns the locally-saved snippets, or null when this browser has none saved
// (callers fall back to the build-time list in that case).
export function loadLocalWidgets(): Widget[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return normalize(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveLocalWidgets(widgets: Widget[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalize(widgets)));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

// Drops the local override so the page reverts to the published config.
export function clearLocalWidgets(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function hasLocalWidgets(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) != null;
}

// Calls `cb` whenever the local override changes (this tab or another tab).
export function subscribeLocalWidgets(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) cb();
  };
  window.addEventListener(CHANGE_EVENT, cb);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("storage", onStorage);
  };
}
