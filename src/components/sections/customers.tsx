import { SectionHeading } from "../ui";

const testimonials = [
  {
    quote:
      "Webropol gives us a single place to listen to both employees and customers. The AI summaries save our team days of manual analysis every quarter.",
    name: "Anna Korhonen",
    role: "Head of People, Nordic retail group",
    initials: "AK",
  },
  {
    quote:
      "Setup was effortless and the local support is outstanding. We launched our first NPS programme across four markets in under two weeks.",
    name: "James Whitfield",
    role: "CX Director, UK services company",
    initials: "JW",
  },
  {
    quote:
      "Accessibility was non-negotiable for our public-sector work. Webropol met WCAG 2.1 AA out of the box — no workarounds needed.",
    name: "Sofia Lindqvist",
    role: "Research Lead, Swedish municipality",
    initials: "SL",
  },
];

export function Customers() {
  return (
    <section id="customers" className="bg-surface py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Customers"
          title="Loved by teams that put experience first"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card flex flex-col p-7">
              <div className="flex gap-1 text-brand-text" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.8 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-fg">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-panel text-sm font-semibold text-brand-text ring-1 ring-inset ring-line">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-fg">
                    {t.name}
                  </span>
                  <span className="block text-sm text-faint">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
