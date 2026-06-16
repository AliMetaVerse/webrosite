"use client";

import { useEffect, useState } from "react";
import type { Widget } from "@/lib/widgets";
import { loadLocalWidgets, subscribeLocalWidgets } from "@/lib/widgets-client";

// Injects each enabled snippet's raw HTML + scripts into the page.
//
// The `widgets` prop is the build-time config (data/widgets.json). A
// browser-local override saved from the settings panel takes precedence for
// live testing, and we re-render whenever that override changes.
//
// Why not dangerouslySetInnerHTML? Browsers do NOT execute <script> tags that
// arrive via innerHTML. Third-party survey/chat embeds rely on their scripts
// running, so we append a wrapper and then replace every <script> inside it with
// a freshly-created one, which the browser does execute.
export function WidgetInjector({ widgets }: { widgets: Widget[] }) {
  const [active, setActive] = useState<Widget[]>(widgets);

  // Prefer the local override (if any), and stay in sync with live saves.
  useEffect(() => {
    const sync = () => setActive(loadLocalWidgets() ?? widgets);
    sync();
    return subscribeLocalWidgets(sync);
  }, [widgets]);

  useEffect(() => {
    const wrappers: HTMLElement[] = [];

    for (const w of active) {
      if (!w.enabled || !w.code.trim()) continue;

      const wrapper = document.createElement("div");
      wrapper.dataset.widgetId = w.id;
      wrapper.innerHTML = w.code;
      document.body.appendChild(wrapper);

      // Re-create scripts so they actually run (top-level and nested).
      wrapper.querySelectorAll("script").forEach((old) => {
        const script = document.createElement("script");
        for (const attr of Array.from(old.attributes)) {
          script.setAttribute(attr.name, attr.value);
        }
        script.text = old.textContent ?? "";
        old.replaceWith(script);
      });

      wrappers.push(wrapper);
    }

    return () => {
      wrappers.forEach((el) => el.remove());
    };
    // Re-run whenever the active snippet set changes (build-time or local save).
  }, [active]);

  return null;
}
