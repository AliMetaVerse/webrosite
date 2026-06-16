// Single source of truth for the deploy sub-path. GitHub Pages serves this
// project at /webrosite, so root-relative public asset URLs (raw <img>,
// next/image string src) must be prefixed by hand — Next's `basePath` only
// auto-applies to next/link and client routing, not to asset URLs.
//
// The value is inlined at build time (NEXT_PUBLIC_*); local dev leaves it empty
// and assets resolve from "/". Kept in sync with basePath in next.config.ts.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Prefix a root-relative public asset (e.g. "/img/x.svg") with the base path.
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
