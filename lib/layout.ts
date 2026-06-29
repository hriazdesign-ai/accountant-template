/**
 * Global layout system — single source of truth for spacing and containers.
 *
 * Rules:
 * - Apply spacing from ONE source per boundary (section padding OR block gap, not both).
 * - All content aligns to the standard container (max-w-6xl + horizontal padding).
 */

// ─── Container ───────────────────────────────────────────────────────────────

export const layoutMaxWidth = "max-w-6xl";
export const layoutPadding = "px-4 sm:px-6 lg:px-8";
export const container = `mx-auto ${layoutMaxWidth} ${layoutPadding}`;

export const containerNarrow = "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8";

// ─── Section spacing ───────────────────────────────────────────────────────────

export const sectionY = "py-16 sm:py-24";
export const sectionYMedium = "py-16 sm:py-20";
export const sectionYCompact = "py-12 sm:py-16";
export const sectionYContact = "py-16 lg:py-24";
export const sectionYCta = "py-20 sm:py-28";

// ─── Hero ──────────────────────────────────────────────────────────────────────

export const heroPaddingDefault = "py-16 sm:py-24 lg:py-32";
export const heroPaddingContact = "py-16 lg:py-24";
export const heroGridGap = "gap-8 sm:gap-10 lg:gap-16";
export const heroImageBleed = "relative -mx-4 pb-20 sm:-mx-6 sm:pb-24 lg:mx-0 lg:pb-0";
export const heroImageInset = "relative mx-4 sm:mx-6 lg:mx-0";
export const heroImageSizes =
  "!aspect-auto h-[440px] sm:h-[520px] lg:!aspect-[4/5] lg:h-auto";
export const heroConsultationOverlay =
  "absolute inset-x-6 bottom-6 z-10 translate-y-[66px] lg:inset-x-0 lg:bottom-5 lg:translate-y-0";

// ─── Group spacing ─────────────────────────────────────────────────────────────

export const gridGap = "gap-6";
export const gridGapLg = "gap-8 lg:gap-16";
export const sectionIntroMargin = "mb-12 sm:mb-16";
export const sectionIntroMarginCompact = "mb-10 sm:mb-12";
export const contentToCards = "mt-8 sm:mt-10";
export const cardsToCta = "mt-10 sm:mt-12";

// ─── Dividers ──────────────────────────────────────────────────────────────────

export const divider = "border-t border-primary/10";

// ─── Footer ────────────────────────────────────────────────────────────────────

export const footerBadgeRow = "flex flex-wrap gap-2.5";

// ─── Software logos ────────────────────────────────────────────────────────────

export const logoTileClass =
  "group flex h-full min-h-[5.25rem] items-center justify-center rounded-[8px] border border-primary/10 bg-white px-6 py-5 transition duration-200 hover:-translate-y-1 hover:shadow-md";
export const logoImageClass =
  "max-h-10 w-auto max-w-[140px] object-contain opacity-80 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0";
