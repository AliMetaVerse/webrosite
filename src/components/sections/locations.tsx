import { SectionHeading, Button, ArrowRightIcon } from "../ui";
import { MailIcon, PhoneIcon, PinIcon } from "../icons";

const offices = [
  {
    flag: "🇫🇮",
    country: "Finland",
    city: "Helsinki — Headquarters",
    phone: "+358 9 4250 5300",
    email: "myynti@webropol.fi",
  },
  {
    flag: "🇬🇧",
    country: "UK & Ireland",
    city: "London",
    phone: "+44 20 3608 0210",
    email: "sales@webropol.co.uk",
  },
  {
    flag: "🇸🇪",
    country: "Sweden",
    city: "Stockholm",
    phone: "+46 8 559 26 700",
    email: "forsaljning@webropol.se",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    city: "Frankfurt",
    phone: "+49 69 9579 7350",
    email: "vertrieb@webropol.de",
  },
];

export function Locations() {
  return (
    <section className="bg-ink-50 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Local presence"
          title="Wherever you are, we're close by"
          intro="Four regional offices delivering the same platform with friendly, on-the-ground support in your language."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div
              key={o.country}
              className="group flex flex-col rounded-3xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5"
            >
              <span className="text-3xl" aria-hidden>
                {o.flag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {o.country}
              </h3>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink-500">
                <PinIcon className="text-base text-teal-600" />
                {o.city}
              </p>
              <div className="mt-5 space-y-2.5 border-t border-ink-100 pt-5 text-sm">
                <a
                  href={`tel:${o.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-ink-600 transition-colors hover:text-teal-700"
                >
                  <PhoneIcon className="text-base text-ink-400" />
                  {o.phone}
                </a>
                <a
                  href={`mailto:${o.email}`}
                  className="flex items-center gap-2 text-ink-600 transition-colors hover:text-teal-700"
                >
                  <MailIcon className="text-base text-ink-400" />
                  {o.email}
                </a>
              </div>
              <Button
                href="#contact"
                variant="ghost"
                className="mt-auto -ml-3 px-3 pt-5"
              >
                Go to website
                <ArrowRightIcon className="text-base" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
