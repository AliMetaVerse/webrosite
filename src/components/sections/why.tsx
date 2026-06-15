import { SectionHeading } from "../ui";
import {
  AccessibilityIcon,
  HandshakeIcon,
  ShieldIcon,
  SparklesIcon,
  TagIcon,
} from "../icons";

const features = [
  {
    icon: SparklesIcon,
    title: "Advanced AI capabilities",
    body: "Generate surveys, summarise open feedback and surface insights automatically — let AI do the heavy lifting.",
  },
  {
    icon: ShieldIcon,
    title: "Secure & GDPR-compliant",
    body: "Your data stays protected and private with enterprise-grade security and full GDPR compliance.",
  },
  {
    icon: AccessibilityIcon,
    title: "Accessible by design",
    body: "Surveys and reports meet WCAG 2.1 AA standards, so everyone can participate without barriers.",
  },
  {
    icon: HandshakeIcon,
    title: "Turn-key research projects",
    body: "Hand a project to our experts or run it yourself — always backed by friendly local support.",
  },
  {
    icon: TagIcon,
    title: "Affordable pricing",
    body: "Get premium capabilities at a fair price, without compromising on quality or scale.",
  },
];

export function Why() {
  return (
    <section id="why" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why choose Webropol"
          title="One platform, endless possibilities"
          intro="Everything you need to listen, understand and act — from a single survey to organisation-wide experience management."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative rounded-3xl border border-ink-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-ink-900/5 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-grape-50 text-teal-700 ring-1 ring-inset ring-teal-100 transition-colors group-hover:from-teal-100 group-hover:to-grape-100">
                <f.icon className="text-2xl" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {f.body}
              </p>
            </div>
          ))}

          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-grape-600 p-7 text-white">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <h3 className="text-xl font-semibold">Built for impact</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Great customer experience starts with happy employees. Webropol
              helps you develop them both.
            </p>
            <p className="mt-4 text-2xl font-semibold">EX ❤️ CX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
