"use client";

import { useEffect } from "react";
import type { Widget } from "@/lib/widgets";

// Injects each enabled snippet's raw HTML + scripts into the page.
//
// Why not dangerouslySetInnerHTML? Browsers do NOT execute <script> tags that
// arrive via innerHTML. Third-party survey/chat embeds rely on their scripts
// running, so we append a wrapper and then replace every <script> inside it with
// a freshly-created one, which the browser does execute.
export function WidgetInjector({ widgets }: { widgets: Widget[] }) {
  useEffect(() => {
    const wrappers: HTMLElement[] = [];

    for (const w of widgets) {
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
    // Re-run if the snippet set changes (e.g. after a save + refresh).
  }, [widgets]);

  return null;
}
