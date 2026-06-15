import { Button } from "../ui";
import { ArrowRightIcon, SparklesIcon } from "../icons";

const stats = [
  { value: "10M+", label: "Responses a year" },
  { value: "40k+", label: "Active users" },
  { value: "20+", label: "Years of trust" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-white">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div
        className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-200/50 to-grape-200/50 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute top-32 -right-32 h-80 w-80 rounded-full bg-grape-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute top-48 -left-32 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative flex flex-col items-center py-28 text-center lg:py-40">
        <span className="animate-rise inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-grape-700 shadow-sm ring-1 ring-inset ring-grape-100">
          <SparklesIcon className="text-base text-grape-500" />
          Now with advanced AI
        </span>

        <h1 className="animate-rise [animation-delay:80ms] mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-ink-900 text-balance sm:text-7xl lg:text-[5.5rem]">
          Every answer,{" "}
          <span className="text-gradient">a decision.</span>
        </h1>

        <p className="animate-rise [animation-delay:160ms] mt-7 max-w-xl text-lg leading-relaxed text-ink-600 text-pretty sm:text-xl">
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

        <dl className="animate-rise [animation-delay:320ms] mt-20 grid w-full max-w-2xl grid-cols-3 gap-6 border-t border-ink-100 pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="order-2 mt-1.5 text-sm text-ink-500">
                {stat.label}
              </dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
