"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui";
import { CloseIcon, GlobeIcon, MenuIcon } from "./icons";
import { WidgetSettings } from "./widget-settings";
import { ThemeSwitcher } from "./theme-switcher";
import type { Widget } from "@/lib/widgets";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Webropol", href: "#why" },
  { label: "Customers", href: "#customers" },
  { label: "Contact", href: "#contact" },
];

const languages = ["Suomi", "Svenska", "English", "Deutsch", "International"];

export function Navbar({
  initialWidgets = [],
}: {
  initialWidgets?: Widget[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/85 backdrop-blur-md"
          : "border-b border-transparent bg-surface/0"
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-3">
        <Link href="/" aria-label="Webropol home" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-btn px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-panel hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeSwitcher />
          <WidgetSettings initialWidgets={initialWidgets} />
          <div className="group relative">
            <button className="inline-flex items-center gap-1.5 rounded-btn px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-panel hover:text-fg">
              <GlobeIcon className="text-base" />
              EN
            </button>
            <div className="invisible absolute right-0 top-full w-40 translate-y-1 rounded-card border border-line bg-card p-1.5 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {languages.map((lang) => (
                <Link
                  key={lang}
                  href="#"
                  className="block rounded-btn px-3 py-2 text-sm text-muted hover:bg-panel hover:text-brand-text"
                >
                  {lang}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="#login"
            className="text-sm font-semibold text-fg transition-colors hover:text-brand-text"
          >
            Login
          </Link>
          <Button href="#contact">Book a demo</Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeSwitcher />
          <WidgetSettings initialWidgets={initialWidgets} />
          <button
            className="inline-flex items-center justify-center rounded-btn p-2 text-fg"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <MenuIcon className="text-2xl opacity-0" />
            ) : (
              <MenuIcon className="text-2xl" />
            )}
            {open ? <CloseIcon className="absolute text-2xl" /> : null}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-18 z-40 bg-ink-900/30 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-18 z-50 origin-top border-b border-line bg-surface px-5 pb-8 pt-2 transition-all ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-base font-medium text-fg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-faint">
              Design theme
            </p>
            <ThemeSwitcher variant="inline" />
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button href="#contact" onClick={() => setOpen(false)}>
              Book a demo
            </Button>
            <Button
              variant="secondary"
              href="#login"
              onClick={() => setOpen(false)}
            >
              Login
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-faint">
            {languages.map((lang) => (
              <Link key={lang} href="#" className="hover:text-brand-text">
                {lang}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
