import { promises as fs } from "fs";
import path from "path";

// A single injectable snippet. `code` is raw HTML + <script> that gets injected
// into the page (e.g. a third-party survey/chat embed: Typeform, Intercom,
// Crisp, SurveyMonkey, or a Webropol iframe popup).
export type Widget = {
  id: string;
  name: string;
  code: string;
  enabled: boolean;
};

// Server-side store. Served to every visitor; commit data/widgets.json to ship
// changes, or edit it live through the header settings panel.
export const WIDGETS_PATH = path.join(process.cwd(), "data", "widgets.json");

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

// Reading the file is an async fs op, so this opts the route into dynamic
// rendering — saved changes show up on the next request.
export async function readWidgets(): Promise<Widget[]> {
  try {
    const raw = await fs.readFile(WIDGETS_PATH, "utf8");
    return normalize(JSON.parse(raw));
  } catch {
    return [];
  }
}
