/**
 * Design tokens for the Ezinwoke Ruth Chika portfolio.
 * Palette is lifted directly from her existing Canva brand system:
 * espresso brown backgrounds, a warm taupe accent used for pills/dividers,
 * and a soft cream used as the "paper" tone in light mode.
 */

export const brand = {
  espresso: "#3E2B22",
  espressoDeep: "#241811",
  espressoSurface: "#2E2019",
  taupe: "#B49B8E",
  taupeLight: "#D9C7BC",
  taupeSoft: "#EFE3DA",
  cream: "#FBF6F1",
  creamDeep: "#F3E9E0",
  ink: "#241811",
  white: "#FFFFFF",
} as const;

export const radii = {
  sm: 8,
  md: 14,
  lg: 24,
  pill: 999,
} as const;

export const fontFamilies = {
  display: "var(--font-display)",
  body: "var(--font-body)",
  accent: "var(--font-accent)",
} as const;