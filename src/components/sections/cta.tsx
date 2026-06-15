import { Button, ArrowRightIcon } from "../ui";
import { CheckIcon } from "../icons";

const points = [
  "Free, no-obligation demo",
  "Set up in days, not months",
  "Local support in your language",
];

export function CTA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-teal-600 via-teal-700 to-grape-700 px-6 py-16 text-center text-white sm:px-12 lg:py-20">
          <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div
            className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
              Ready to create experiences that matter?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85 text-pretty">
              See how Webropol can help you listen, understand and act — book a
              personalised demo with our team today.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href="#contact"
                variant="white"
                className="px-6 py-3 text-base"
              >
                Book a demo
                <ArrowRightIcon className="text-base" />
              </Button>
              <Button
                href="#login"
                className="bg-white/10 px-6 py-3 text-base text-white ring-1 ring-inset ring-white/30 hover:bg-white/20"
              >
                Login to Webropol
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {points.map((p) => (
                <li
                  key={p}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90"
                >
                  <CheckIcon className="text-base text-teal-200" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
