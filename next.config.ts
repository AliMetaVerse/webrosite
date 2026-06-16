import type { NextConfig } from "next";

// This site ships as a GitHub Pages *project* site
// (alimetaverse.github.io/webrosite), so it is served from the "/webrosite"
// sub-path. The CI build sets NEXT_PUBLIC_BASE_PATH; local `next dev` leaves it
// empty and serves from "/". Keep this in sync with src/lib/base-path.ts, which
// reads the same env var to prefix raw asset URLs (basePath only auto-applies to
// next/link and routing — not to <img> or next/image string srcs).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out for static hosting (no Node server).
  output: "export",
  basePath,
  // GitHub Pages has no Next.js image optimizer, so serve images unoptimized.
  images: { unoptimized: true },
  // Emit /route/index.html so deep links resolve without server rewrites.
  trailingSlash: true,
};

export default nextConfig;
