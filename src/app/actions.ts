"use server";

import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { WIDGETS_PATH, type Widget } from "@/lib/widgets";

export type SaveResult = { ok: true } | { ok: false; error: string };

// Persists the widget config for ALL visitors. Optionally gated behind the
// WIDGET_ADMIN_TOKEN env var — when set, callers must supply the matching token.
export async function saveWidgets(
  widgets: Widget[],
  token?: string,
): Promise<SaveResult> {
  const required = process.env.WIDGET_ADMIN_TOKEN;
  if (required && token !== required) {
    return { ok: false, error: "Invalid admin token." };
  }

  if (!Array.isArray(widgets)) {
    return { ok: false, error: "Invalid payload." };
  }

  const clean: Widget[] = widgets.map((w, i) => ({
    id: String(w?.id || `widget-${i}`),
    name: String(w?.name ?? "").slice(0, 200),
    code: String(w?.code ?? ""),
    enabled: Boolean(w?.enabled),
  }));

  try {
    await fs.mkdir(path.dirname(WIDGETS_PATH), { recursive: true });
    await fs.writeFile(WIDGETS_PATH, JSON.stringify(clean, null, 2), "utf8");
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Write failed." };
  }

  // Re-render every route so the new snippets are served on the next request
  // (needed for the statically-prerendered route in production). The file is
  // already saved at this point, so don't let a revalidation hiccup fail the
  // save — the client reloads and re-reads the config regardless.
  try {
    revalidatePath("/", "layout");
  } catch {
    // ignore — save succeeded; the reload will pick up the new config
  }
  return { ok: true };
}
