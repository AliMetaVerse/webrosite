export function Mission() {
  return (
    <section className="brand-surface relative overflow-hidden py-20 lg:py-28">
      <div
        className="deco absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/15 blur-3xl"
        aria-hidden
      />
      <div
        className="deco absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
            Our mission
          </p>
          <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl lg:text-4xl">
            We are more than just a Survey and Reporting platform — we are your
            partners in creating customer and employee experiences that truly
            matter.
          </p>
          <p className="mt-8 text-base leading-relaxed text-white/75">
            We help you collect data and transform it into actionable insights
            for developing the experiences of your employees and customers
            alike.
          </p>
        </div>
      </div>
    </section>
  );
}
