"use client";

import { useEffect, useRef, useState } from "react";

// Webropol survey popup — responsive, no dependencies.
// Auto-launches on load; no launcher button.
const SURVEY_SRC = "http://localhost:3000/r/6F9903681EF79001";

export function SurveyWidget() {
  const [open, setOpen] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Resize the card to fit the survey, driven by postMessage from the iframe.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let frameOrigin: string | null = null;
    try {
      frameOrigin = new URL(frame.src, location.href).origin;
    } catch {
      frameOrigin = null;
    }

    let lastHeight = 0;

    function fitCard(h: number) {
      const card = cardRef.current;
      const head = headRef.current;
      if (!card) return;
      if (window.innerWidth <= 640) {
        card.style.height = "";
        return;
      }
      card.style.height = h + (head?.offsetHeight ?? 0) + "px";
    }

    function onMessage(e: MessageEvent) {
      if (frameOrigin && e.origin !== frameOrigin) return;
      const d = e.data;
      if (!d || d.type !== "webropol:resize" || typeof d.height !== "number") {
        return;
      }
      lastHeight = d.height;
      fitCard(lastHeight);
    }

    function onResize() {
      if (lastHeight) fitCard(lastHeight);
    }

    window.addEventListener("message", onMessage);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="wbpl-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Share your feedback"
      hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="wbpl-card" ref={cardRef}>
        <div className="wbpl-head" ref={headRef}>
          <span className="wbpl-title">Share your feedback</span>
          <button
            type="button"
            className="wbpl-close"
            aria-label="Close survey"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        <iframe
          className="wbpl-frame"
          title="Share your feedback"
          src={SURVEY_SRC}
          loading="lazy"
          ref={frameRef}
        />
      </div>
    </div>
  );
}
