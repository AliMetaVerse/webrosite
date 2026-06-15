"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui";
import { CloseIcon, GlobeIcon, MenuIcon } from "./icons";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Webropol", href: "#why" },
  { label: "Customers", href: "#customers" },
  { label: "Contact", href: "#contact" },
];

const languages = ["Suomi", "Svenska", "English", "Deutsch", "International"];

export function Navbar() {
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
          ? "border-b border-ink-100 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
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
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="group relative">
            <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900">
              <GlobeIcon className="text-base" />
              EN
            </button>
            <div className="invisible absolute right-0 top-full w-40 translate-y-1 rounded-2xl border border-ink-100 bg-white p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {languages.map((lang) => (
                <Link
                  key={lang}
                  href="#"
                  className="block rounded-xl px-3 py-2 text-sm text-ink-600 hover:bg-teal-50 hover:text-teal-700"
                >
                  {lang}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="#login"
            className="text-sm font-semibold text-ink-700 transition-colors hover:text-teal-700"
          >
            Login
          </Link>
          <Button href="#contact">Book a demo</Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-xl p-2 text-ink-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <MenuIcon className="text-2xl opacity-0" /> : <MenuIcon className="text-2xl" />}
          {open ? <CloseIcon className="absolute text-2xl" /> : null}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-18 z-40 bg-ink-900/20 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-18 z-50 origin-top border-b border-ink-100 bg-white px-5 pb-8 pt-2 transition-all ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-50 py-3.5 text-base font-medium text-ink-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="#contact" onClick={() => setOpen(false)}>
              Book a demo
            </Button>
            <Button variant="secondary" href="#login" onClick={() => setOpen(false)}>
              Login
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-500">
            {languages.map((lang) => (
              <Link key={lang} href="#" className="hover:text-teal-700">
                {lang}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
