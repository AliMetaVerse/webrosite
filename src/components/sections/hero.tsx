"use client";

import Image from "next/image";
import { Button } from "../ui";
import { ArrowRightIcon, SparklesIcon } from "../icons";
import { useTheme } from "../theme";
import { asset } from "@/lib/base-path";

const HERO_IMG = asset("/img/puolikaarihero-JPEG-v5-1536x1171.jpg");

const stats = [
  { value: "10M+", label: "Responses a year" },
  { value: "40k+", label: "Active users" },
  { value: "20+", label: "Years of trust" },
];

export function Hero() {
  const { theme } = useTheme();

  if (theme === "cinematic") return <CinematicHero />;
  if (theme === "swiss") return <SwissHero />;
  return <EditorialHero />;
}

/* ----------------------------------------------------------------- *
 *  Editorial Light — split layout, text left, framed product right
 * ----------------------------------------------------------------- */
function EditorialHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        className="deco pointer-events-none absolute -top-40 right-0 h-[40rem] w-[40rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--glow-1), transparent 65%)",
        }}
        aria-hidden
      />
      <div className="container-x relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div className="max-w-xl">
          <span className="animate-rise eyebrow">
            <SparklesIcon className="text-sm" />
            Now with advanced AI
          </span>

          <h1 className="animate-rise [animation-delay:80ms] mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-fg text-balance sm:text-6xl lg:text-7xl">
            Every answer,{" "}
            <span className="text-gradient">a decision.</span>
          </h1>

          <p className="animate-rise [animation-delay:160ms] mt-6 max-w-md text-lg leading-relaxed text-muted text-pretty">
            The survey &amp; reporting platform that turns feedback into action —
            for the teams who take experience seriously.
          </p>

          <div className="animate-rise [animation-delay:240ms] mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" className="px-7 py-3.5 text-base">
              Book a demo
              <ArrowRightIcon className="text-base" />
            </Button>
            <Button
              href="#platform"
              variant="secondary"
              className="px-7 py-3.5 text-base"
            >
              Explore the platform
            </Button>
          </div>

          <dl className="animate-rise [animation-delay:320ms] mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-semibold tracking-tight text-fg">
                  {s.value}
                </dd>
                <dt className="mt-0.5 text-sm text-faint">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-rise [animation-delay:200ms] relative">
          <ProductFrame />
          <div
            className="deco animate-float absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-card px-5 py-4 shadow-card sm:block"
            aria-hidden
          >
            <p className="text-xs font-medium text-faint">Response rate</p>
            <p className="mt-1 text-2xl font-semibold text-fg">
              68%{" "}
              <span className="text-sm font-medium text-brand-text">
                ↑ 12%
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- *
 *  Cinematic Dark — centered headline, glowing product below
 * ----------------------------------------------------------------- */
function CinematicHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="bg-grid deco absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div
        className="deco pointer-events-none absolute left-1/2 top-[-10rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, var(--glow-1), var(--glow-2) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-x relative flex flex-col items-center pt-24 text-center lg:pt-32">
        <span className="animate-rise eyebrow">
          <SparklesIcon className="text-sm" />
          Now with advanced AI
        </span>

        <h1 className="animate-rise [animation-delay:80ms] mt-8 max-w-4xl text-5xl font-semibold leading-[1] tracking-tight text-fg text-balance sm:text-7xl lg:text-[5.25rem]">
          Every answer,{" "}
          <span className="text-gradient">a decision.</span>
        </h1>

        <p className="animate-rise [animation-delay:160ms] mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
          The survey &amp; reporting platform that turns feedback into action.
        </p>

        <div className="animate-rise [animation-delay:240ms] mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="#contact" className="px-7 py-3.5 text-base">
            Book a demo
            <ArrowRightIcon className="text-base" />
          </Button>
          <Button
            href="#platform"
            variant="secondary"
            className="px-7 py-3.5 text-base"
          >
            Explore the platform
          </Button>
        </div>

        <div className="animate-rise [animation-delay:320ms] relative mt-16 w-full max-w-5xl pb-24">
          <div
            className="deco pointer-events-none absolute inset-x-10 top-10 bottom-10 rounded-full blur-[90px]"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--glow-1), transparent 70%)",
            }}
            aria-hidden
          />
          <ProductFrame />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- *
 *  Swiss Corporate — editorial 12-col grid, flush-left, hairlines
 * ----------------------------------------------------------------- */
function SwissHero() {
  return (
    <section className="bg-surface">
      <div className="container-x border-t border-line-strong pt-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              01 — Survey &amp; Reporting Platform
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              Every answer,
              <br />a decision.
            </h1>
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted">
              The survey and reporting platform that turns feedback into action —
              trusted by organisations across the Nordics, UK and Europe for over
              two decades.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" className="px-7 py-3.5 text-base">
                Book a demo
                <ArrowRightIcon className="text-base" />
              </Button>
              <Button
                href="#platform"
                variant="secondary"
                className="px-7 py-3.5 text-base"
              >
                Explore the platform
              </Button>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-1 border-y border-line-strong sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-baseline justify-between gap-4 py-5 sm:flex-col sm:items-start sm:justify-start sm:py-6 ${
                i > 0 ? "sm:border-l sm:border-line sm:pl-8" : ""
              }`}
            >
              <dd className="text-4xl font-semibold tracking-tight text-fg">
                {s.value}
              </dd>
              <dt className="text-xs font-semibold uppercase tracking-wider text-faint sm:mt-2">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>

        <figure className="mt-10 mb-4 border border-line-strong">
          <Image
            src={HERO_IMG}
            width={1536}
            height={1171}
            priority
            sizes="100vw"
            alt="Webropol survey and reporting platform"
            className="h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}

/* Shared rounded "product" frame for Editorial + Cinematic. */
function ProductFrame() {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-card shadow-card">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 text-xs font-medium text-faint">
          app.webropol.com
        </span>
      </div>
      <Image
        src={HERO_IMG}
        width={1536}
        height={1171}
        priority
        sizes="(min-width: 1024px) 48rem, 100vw"
        alt="Webropol survey and reporting platform"
        className="h-auto w-full"
      />
    </div>
  );
}
