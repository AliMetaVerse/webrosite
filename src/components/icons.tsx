import type { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<HTMLElement>;

// Font Awesome duotone light icons, loaded via the kit stylesheet in the root
// layout. Sizing is controlled by font-size, so pass Tailwind `text-*` classes
// (e.g. `text-base`, `text-xl`) rather than width/height utilities.
function makeIcon(faClasses: string, displayName: string) {
  function Icon({ className = "", ...props }: IconProps) {
    return (
      <i aria-hidden="true" className={`${faClasses} ${className}`.trim()} {...props} />
    );
  }
  Icon.displayName = displayName;
  return Icon;
}

const duotone = "fa-duotone fa-light fa-fw";

export const SparklesIcon = makeIcon(`${duotone} fa-sparkles`, "SparklesIcon");
export const ShieldIcon = makeIcon(`${duotone} fa-shield-check`, "ShieldIcon");
export const AccessibilityIcon = makeIcon(`${duotone} fa-universal-access`, "AccessibilityIcon");
export const HandshakeIcon = makeIcon(`${duotone} fa-handshake`, "HandshakeIcon");
export const TagIcon = makeIcon(`${duotone} fa-tag`, "TagIcon");
export const ChartIcon = makeIcon(`${duotone} fa-chart-line`, "ChartIcon");
export const SurveyIcon = makeIcon(`${duotone} fa-clipboard-list`, "SurveyIcon");
export const PulseIcon = makeIcon(`${duotone} fa-wave-pulse`, "PulseIcon");
export const HeartIcon = makeIcon(`${duotone} fa-heart`, "HeartIcon");
export const UsersIcon = makeIcon(`${duotone} fa-users`, "UsersIcon");
export const GlobeIcon = makeIcon(`${duotone} fa-globe`, "GlobeIcon");
export const ArrowRightIcon = makeIcon(`${duotone} fa-arrow-right`, "ArrowRightIcon");
export const CheckIcon = makeIcon(`${duotone} fa-check`, "CheckIcon");
export const MenuIcon = makeIcon(`${duotone} fa-bars`, "MenuIcon");
export const CloseIcon = makeIcon(`${duotone} fa-xmark`, "CloseIcon");
export const PhoneIcon = makeIcon(`${duotone} fa-phone`, "PhoneIcon");
export const GearIcon = makeIcon(`${duotone} fa-gear`, "GearIcon");
export const PlusIcon = makeIcon(`${duotone} fa-plus`, "PlusIcon");
export const TrashIcon = makeIcon(`${duotone} fa-trash`, "TrashIcon");
export const MailIcon = makeIcon(`${duotone} fa-envelope`, "MailIcon");
export const PinIcon = makeIcon(`${duotone} fa-location-dot`, "PinIcon");
export const PaletteIcon = makeIcon(`${duotone} fa-swatchbook`, "PaletteIcon");
export const CheckMiniIcon = makeIcon(`${duotone} fa-check`, "CheckMiniIcon");

// Brand marks are single-tone in Font Awesome.
export const LinkedInIcon = makeIcon("fa-brands fa-linkedin-in fa-fw", "LinkedInIcon");
