import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-brand-ink shadow-soft hover:bg-brand-hover focus-visible:outline-brand",
  secondary:
    "bg-card text-fg ring-1 ring-inset ring-line-strong hover:bg-panel focus-visible:outline-fg",
  ghost:
    "bg-transparent text-brand-text hover:bg-panel focus-visible:outline-brand",
  // Used on top of coloured brand-surface panels.
  white:
    "bg-white text-ink-900 shadow-sm hover:bg-ink-50 focus-visible:outline-white",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: ButtonVariant } & ComponentProps<typeof Link>) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-btn px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
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
        align === "center"
          ? "items-center text-center mx-auto max-w-2xl"
          : "items-start text-left max-w-2xl"
      } ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl text-balance">
        {title}
      </h2>
      {intro ? (
        <p className="text-lg leading-relaxed text-muted text-pretty">{intro}</p>
      ) : null}
    </div>
  );
}

export { ArrowRightIcon };
