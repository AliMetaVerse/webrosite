/* eslint-disable @next/next/no-img-element */

/**
 * Webropol wordmark. The brand "primary" lockup reads well on the light
 * themes (editorial, swiss); the white variant is swapped in for the dark
 * cinematic theme via the [data-theme] cascade in globals.css.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/img/logo/webropol-logo-noslogan-primary.svg"
        alt="Webropol"
        className="logo-img logo-img--light h-7 w-auto"
        width={161}
        height={28}
      />
      <img
        src="/img/logo/webropol-logo-noslogan-white.svg"
        alt="Webropol"
        className="logo-img logo-img--dark h-7 w-auto"
        width={161}
        height={28}
        aria-hidden
      />
    </span>
  );
}
