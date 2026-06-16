"use client";

import { useEffect, useState } from "react";
import type { Widget } from "@/lib/widgets";
import { CloseIcon, GearIcon, PlusIcon, TrashIcon } from "./icons";

function blankWidget(): Widget {
  // Math.random / Date.now would break framework determinism elsewhere, but
  // this runs only in the browser on a user click, so it's safe here.
  return {
    id: `widget-${Math.random().toString(36).slice(2, 9)}`,
    name: "",
    code: "",
    enabled: true,
  };
}

export function WidgetSettings({
  initialWidgets,
}: {
  initialWidgets: Widget[];
}) {
  const [open, setOpen] = useState(false);
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);
  const [notice, setNotice] = useState<string | null>(null);

  // Reset edits to the build-time config each time the panel opens.
  function openPanel() {
    setWidgets(initialWidgets);
    setNotice(null);
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function update(id: string, patch: Partial<Widget>) {
    setWidgets((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...patch } : w)),
    );
  }

  // This site is statically hosted (GitHub Pages), so there is no server to
  // persist edits. Copy the config as JSON for the admin to commit to
  // data/widgets.json — pushing it rebuilds and publishes for every visitor.
  async function onCopyConfig() {
    setNotice(null);
    const json = JSON.stringify(
      widgets.map((w) => ({
        id: w.id,
        name: w.name,
        code: w.code,
        enabled: w.enabled,
      })),
      null,
      2,
    );
    try {
      await navigator.clipboard.writeText(json);
      setNotice(
        "Copied. Commit it to data/widgets.json and push to publish for all visitors.",
      );
    } catch {
      setNotice(
        "Copy failed — manually move your snippets into data/widgets.json and push to publish.",
      );
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openPanel}
        aria-label="Popup & embed settings"
        title="Popup & embed settings"
        className="inline-flex items-center justify-center rounded-btn p-2 text-muted transition-colors hover:bg-panel hover:text-fg"
      >
        <GearIcon className="text-base" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[2147483600] flex items-start justify-center overflow-y-auto bg-ink-900/40 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Popup & embed settings"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="my-auto w-full max-w-2xl rounded-3xl border border-ink-100 bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-ink-100 px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-ink-900">
                  Popup &amp; embed code
                </h2>
                <p className="text-sm text-ink-500">
                  Paste survey or chat embed snippets, then copy the config and
                  commit it to publish.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close settings"
                className="rounded-full p-2 text-ink-500 hover:bg-ink-50 hover:text-ink-900"
              >
                <CloseIcon className="text-xl" />
              </button>
            </div>

            <div className="max-h-[60vh] space-y-4 overflow-y-auto px-6 py-5">
              {widgets.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-ink-200 px-4 py-8 text-center text-sm text-ink-500">
                  No snippets yet. Add one to embed a survey or chat popup.
                </p>
              ) : null}

              {widgets.map((w) => (
                <div
                  key={w.id}
                  className="rounded-2xl border border-ink-100 bg-ink-50/40 p-4"
                >
                  <div className="flex items-center gap-3">
                    <input
                      value={w.name}
                      onChange={(e) => update(w.id, { name: e.target.value })}
                      placeholder="Name (e.g. Typeform survey, Intercom chat)"
                      className="min-w-0 flex-1 rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                    <label className="inline-flex shrink-0 items-center gap-2 text-sm text-ink-600">
                      <input
                        type="checkbox"
                        checked={w.enabled}
                        onChange={(e) =>
                          update(w.id, { enabled: e.target.checked })
                        }
                        className="h-4 w-4 accent-teal-600"
                      />
                      Enabled
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setWidgets((prev) => prev.filter((x) => x.id !== w.id))
                      }
                      aria-label="Delete snippet"
                      className="shrink-0 rounded-lg p-2 text-ink-400 hover:bg-red-50 hover:text-red-600"
                    >
                      <TrashIcon className="text-base" />
                    </button>
                  </div>
                  <textarea
                    value={w.code}
                    onChange={(e) => update(w.id, { code: e.target.value })}
                    placeholder="<script src='...'></script> or full HTML embed"
                    spellCheck={false}
                    rows={5}
                    className="mt-3 w-full resize-y rounded-xl border border-ink-200 bg-white px-3 py-2 font-mono text-xs leading-relaxed text-ink-900 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={() => setWidgets((prev) => [...prev, blankWidget()])}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50"
              >
                <PlusIcon className="text-sm" /> Add snippet
              </button>
            </div>

            <div className="flex flex-col gap-3 border-t border-ink-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              {notice ? (
                <span className="text-sm text-ink-600">{notice}</span>
              ) : (
                <span className="text-sm text-ink-400">
                  Edits publish via <code>data/widgets.json</code>.
                </span>
              )}
              <div className="flex shrink-0 items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 hover:bg-ink-50"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={onCopyConfig}
                  className="rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
                >
                  Copy config JSON
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
