import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-600 text-white shadow-sm hover:bg-teal-700 focus-visible:outline-teal-600",
  secondary:
    "bg-white text-ink-900 ring-1 ring-inset ring-ink-200 hover:bg-ink-50 focus-visible:outline-ink-400",
  ghost:
    "bg-transparent text-ink-700 hover:text-teal-700 hover:bg-teal-50 focus-visible:outline-teal-600",
  white:
    "bg-white text-grape-700 shadow-sm hover:bg-ink-50 focus-visible:outline-white",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: ButtonVariant } & ComponentProps<typeof Link>) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700 ring-1 ring-inset ring-teal-100">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl"
      } ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl text-balance">
        {title}
      </h2>
      {intro ? (
        <p className="text-lg leading-relaxed text-ink-600 text-pretty">{intro}</p>
      ) : null}
    </div>
  );
}

export { ArrowRightIcon };
