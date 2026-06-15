import { Button } from "../ui";
import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  PulseIcon,
} from "../icons";

const proofPoints = ["GDPR-compliant", "WCAG 2.1 AA", "Local support"];

const barData = [
  { label: "Promoters", value: 72, tone: "bg-teal-500" },
  { label: "Passives", value: 21, tone: "bg-grape-400" },
  { label: "Detractors", value: 7, tone: "bg-ink-300" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-white">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-grape-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-grape-700 shadow-sm ring-1 ring-inset ring-grape-100">
            <SparklesIcon className="text-base text-grape-500" />
            Now with advanced AI capabilities
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl text-balance">
            The most versatile{" "}
            <span className="text-gradient">Survey &amp; Reporting</span>{" "}
            platform
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty">
            From individual modules to comprehensive Employee and Customer
            Experience management — collect data and transform it into
            actionable insights that truly matter.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" className="px-6 py-3 text-base">
              Book a demo
              <ArrowRightIcon className="text-base" />
            </Button>
            <Button
              href="#platform"
              variant="secondary"
              className="px-6 py-3 text-base"
            >
              Explore the platform
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {proofPoints.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-700"
              >
                <CheckIcon className="text-base text-teal-600" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Mock product dashboard */}
        <div className="relative animate-rise [animation-delay:120ms]">
          <div className="absolute -inset-4 rounded-4xl bg-gradient-to-tr from-teal-200/40 to-grape-200/40 blur-2xl" aria-hidden />
          <div className="relative rounded-4xl border border-ink-100 bg-white p-5 shadow-2xl shadow-ink-900/10">
            <div className="flex items-center justify-between border-b border-ink-100 pb-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                  Customer Experience
                </p>
                <p className="text-base font-semibold text-ink-900">
                  Q2 Pulse — Live results
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 py-5">
              {[
                { label: "Responses", value: "8,421" },
                { label: "NPS", value: "+64" },
                { label: "Avg. score", value: "4.6" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-ink-50 px-3 py-3 text-center"
                >
                  <p className="text-xl font-semibold text-ink-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-ink-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {barData.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-1 flex justify-between text-xs font-medium text-ink-600">
                    <span>{bar.label}</span>
                    <span>{bar.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className={`h-full rounded-full ${bar.tone}`}
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-gradient-to-r from-grape-50 to-teal-50 p-3.5">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-grape-600 shadow-sm">
                <SparklesIcon className="text-base" />
              </span>
              <p className="text-xs leading-relaxed text-ink-700">
                <span className="font-semibold text-ink-900">AI summary:</span>{" "}
                Satisfaction rose 9% after onboarding changes. Top driver:
                faster support response.
              </p>
            </div>
          </div>

          {/* Floating chip */}
          <div className="absolute -bottom-5 -left-5 hidden animate-float items-center gap-2.5 rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-xl sm:flex">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <PulseIcon className="text-xl" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">+9% CSAT</p>
              <p className="text-xs text-ink-500">vs. last quarter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
