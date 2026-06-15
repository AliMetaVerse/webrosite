const stats = [
  { value: "25+", label: "years of expertise" },
  { value: "50,000+", label: "active users" },
  { value: "10M+", label: "surveys delivered" },
  { value: "4 countries", label: "with local support" },
];

export function Trust() {
  return (
    <section className="border-y border-ink-100 bg-white">
      <div className="container-x py-10">
        <p className="text-center text-sm font-medium text-ink-500">
          Trusted by organisations across the Nordics, UK &amp; Europe
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
