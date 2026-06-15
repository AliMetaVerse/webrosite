export function Mission() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white lg:py-28">
      <div
        className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-grape-500/20 blur-3xl"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Our mission
          </p>
          <p className="mt-6 text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl text-balance">
            We are more than just a Survey and Reporting platform —{" "}
            <span className="text-gradient">we are your partners</span> in
            creating customer and employee experiences that truly matter.
          </p>
          <p className="mt-8 text-base leading-relaxed text-white/70">
            We help you collect data and transform it into actionable insights
            for developing the experiences of your employees and customers
            alike.
          </p>
        </div>
      </div>
    </section>
  );
}
