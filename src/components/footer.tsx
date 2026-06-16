import Link from "next/link";
import { Logo } from "./logo";
import { LinkedInIcon } from "./icons";

const columns = [
  {
    title: "Platform",
    links: [
      "Survey designer",
      "Reporting & analytics",
      "AI insights",
      "Integrations",
      "Accessibility",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Employee Experience",
      "Customer Experience",
      "360° Assessments",
      "Events & feedback",
      "Research projects",
    ],
  },
  {
    title: "Company",
    links: ["About us", "Customers", "Careers", "Partners", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help center", "Webinars", "Blog", "Security & GDPR", "Status"],
  },
];

const badges = [
  "Cyber Essentials Certified",
  "WCAG 2.1 AA",
  "GDPR Compliant",
  "ISO 27001",
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-panel">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              The most versatile Survey and Reporting platform with advanced AI
              capabilities. We&apos;re your partners in creating customer and
              employee experiences that truly matter.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-btn bg-card px-3 py-1 text-xs font-medium text-muted ring-1 ring-inset ring-line"
                >
                  {b}
                </span>
              ))}
            </div>
            <Link
              href="#"
              aria-label="Webropol on LinkedIn"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-card text-faint ring-1 ring-inset ring-line transition-colors hover:text-brand-text"
            >
              <LinkedInIcon className="text-xl" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-fg">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-muted transition-colors hover:text-brand-text"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-faint sm:flex-row">
          <p>© 2026 Webropol</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-brand-text">
              Accessibility statement
            </Link>
            <Link href="#" className="hover:text-brand-text">
              Privacy policy
            </Link>
            <Link href="#login" className="hover:text-brand-text">
              Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
