import { SectionHeading, Button, ArrowRightIcon } from "../ui";
import {
  ChartIcon,
  HeartIcon,
  PulseIcon,
  SurveyIcon,
  UsersIcon,
} from "../icons";

const solutions = [
  {
    icon: UsersIcon,
    tag: "Employee Experience",
    title: "Engage and develop your people",
    body: "Run pulse surveys, 360° assessments and lifecycle feedback to understand and grow your teams.",
    points: ["Engagement & eNPS", "360° assessments", "Onboarding & exit"],
  },
  {
    icon: HeartIcon,
    tag: "Customer Experience",
    title: "Turn feedback into loyalty",
    body: "Capture customer voice across every touchpoint and act on it with NPS, CSAT and journey analytics.",
    points: ["NPS & CSAT tracking", "Journey feedback", "Closed-loop actions"],
  },
];

const modules = [
  {
    icon: SurveyIcon,
    title: "Survey designer",
    body: "Build beautiful, accessible surveys in minutes with AI-assisted question generation.",
  },
  {
    icon: ChartIcon,
    title: "Reporting & analytics",
    body: "Live dashboards and automated reports that update as responses arrive.",
  },
  {
    icon: PulseIcon,
    title: "Real-time pulse",
    body: "Continuous listening with scheduled pulses and instant trend detection.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-panel py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Solutions"
          title="From a single survey to full experience management"
          intro="Start with the modules you need today and scale into complete EX and CX programmes — all on one platform."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {solutions.map((s) => (
            <div
              key={s.tag}
              className="group surface-card card-lift overflow-hidden p-8"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-card bg-brand text-brand-ink shadow-soft">
                  <s.icon className="text-[1.75rem]" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-wide text-faint">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-fg">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {s.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-btn bg-panel px-3 py-1.5 text-sm font-medium text-muted ring-1 ring-inset ring-line"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                href="#contact"
                variant="ghost"
                className="mt-7 -ml-3 px-3"
              >
                Learn more
                <ArrowRightIcon className="text-base" />
              </Button>
            </div>
          ))}
        </div>

        <div id="platform" className="mt-6 grid gap-5 sm:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.title}
              className="surface-card p-6 transition-colors hover:border-line-strong"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-card bg-panel text-brand-text ring-1 ring-inset ring-line">
                <m.icon className="text-xl" />
              </span>
              <h4 className="mt-4 text-base font-semibold text-fg">{m.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
