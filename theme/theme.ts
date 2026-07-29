import { extendTheme } from "@mui/material/styles";
import { brand, radii, fontFamilies } from "./token";

const theme = extendTheme({
  cssVarPrefix: "ruth",
  colorSchemeSelector: "data-mui-color-scheme",
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: brand.espresso, contrastText: brand.cream },
        secondary: { main: brand.taupe, contrastText: brand.espressoDeep },
        background: {
          default: brand.cream,
          paper: brand.white,
        },
        text: {
          primary: brand.ink,
          secondary: "#6B5A4E",
        },
        divider: brand.taupeLight,
        brand: {
          espresso: brand.espresso,
          espressoDeep: brand.espressoDeep,
          espressoSurface: brand.espressoSurface,
          taupe: brand.taupe,
          taupeLight: brand.taupeLight,
          taupeSoft: brand.taupeSoft,
          cream: brand.cream,
          creamDeep: brand.creamDeep,
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: brand.taupeLight, contrastText: brand.espressoDeep },
        secondary: { main: brand.taupe, contrastText: brand.espressoDeep },
        background: {
          default: brand.espressoDeep,
          paper: brand.espressoSurface,
        },
        text: {
          primary: brand.cream,
          secondary: brand.taupeLight,
        },
        divider: "rgba(217, 199, 188, 0.24)",
        brand: {
          espresso: brand.espresso,
          espressoDeep: brand.espressoDeep,
          espressoSurface: brand.espressoSurface,
          taupe: brand.taupe,
          taupeLight: brand.taupeLight,
          taupeSoft: "rgba(217, 199, 188, 0.14)",
          cream: brand.cream,
          creamDeep: brand.creamDeep,
        },
      },
    },
  },
  shape: {
    borderRadius: radii.md,
  },
  typography: {
    fontFamily: fontFamilies.body,
    h1: {
      fontFamily: fontFamilies.display,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.05,
      fontSize: "clamp(2.75rem, 5vw + 1rem, 5rem)",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: fontFamilies.display,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      lineHeight: 1.1,
      fontSize: "clamp(2.1rem, 3vw + 1rem, 3.25rem)",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: fontFamilies.display,
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: "clamp(1.5rem, 1.5vw + 1rem, 2.1rem)",
    },
    h4: {
      fontFamily: fontFamilies.display,
      fontWeight: 700,
      fontSize: "1.375rem",
    },
    h5: {
      fontFamily: fontFamilies.display,
      fontWeight: 700,
      fontSize: "1.125rem",
    },
    h6: {
      fontFamily: fontFamilies.accent,
      fontWeight: 600,
      fontSize: "1rem",
    },
    subtitle1: {
      fontFamily: fontFamilies.accent,
      fontWeight: 500,
      fontSize: "1.15rem",
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.75,
    },
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
    eyebrow: {
      fontFamily: fontFamilies.accent,
      fontWeight: 600,
      fontSize: "0.8rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
    },
    button: {
      fontFamily: fontFamilies.accent,
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        html: { scrollBehavior: "smooth" },
        body: {
          backgroundColor: themeParam.vars.palette.background.default,
          transition: "background-color 200ms ease",
        },
        "*:focus-visible": {
          outline: `3px solid ${themeParam.vars.palette.brand.taupe}`,
          outlineOffset: "3px",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "*": {
            animationDuration: "0.001ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.001ms !important",
            scrollBehavior: "auto !important",
          },
        },
      }),
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
      styleOverrides: {
        root: {
          paddingLeft: "clamp(1.25rem, 4vw, 3rem)",
          paddingRight: "clamp(1.25rem, 4vw, 3rem)",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: radii.pill,
          paddingInline: "1.6rem",
          paddingBlock: "0.75rem",
        },
        sizeLarge: {
          paddingInline: "2rem",
          paddingBlock: "0.9rem",
          fontSize: "1rem",
        },
        containedPrimary: ({ theme: t }) => ({
          backgroundColor: t.vars.palette.brand.espresso,
          color: t.vars.palette.brand.cream,
          "&:hover": {
            backgroundColor: t.vars.palette.brand.espressoDeep,
          },
          [t.getColorSchemeSelector("dark")]: {
            backgroundColor: t.vars.palette.brand.taupeLight,
            color: t.vars.palette.brand.espressoDeep,
            "&:hover": {
              backgroundColor: t.vars.palette.brand.taupe,
            },
          },
        }),
        outlined: ({ theme: t }) => ({
          borderWidth: 2,
          borderColor: t.vars.palette.brand.taupe,
          "&:hover": {
            borderWidth: 2,
            backgroundColor: t.vars.palette.brand.taupeSoft,
          },
        }),
        text: ({ theme: t }) => ({
          color: t.vars.palette.text.primary,
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: radii.pill,
          fontFamily: fontFamilies.accent,
          fontWeight: 500,
          backgroundColor: t.vars.palette.brand.taupeSoft,
          color: t.vars.palette.text.primary,
          border: `1px solid ${t.vars.palette.divider}`,
        }),
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme: t }) => ({
          backgroundColor: t.vars.palette.background.paper,
          backdropFilter: "saturate(180%) blur(14px)",
          borderBottom: `1px solid ${t.vars.palette.divider}`,
          color: t.vars.palette.text.primary,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: radii.lg,
          border: `1px solid ${t.vars.palette.divider}`,
          backgroundColor: t.vars.palette.background.paper,
          backgroundImage: "none",
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderColor: t.vars.palette.divider,
        }),
      },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
    },
    MuiAccordion: {
      defaultProps: { disableGutters: true, elevation: 0 },
      styleOverrides: {
        root: ({ theme: t }) => ({
          border: `1px solid ${t.vars.palette.divider}`,
          borderRadius: `${radii.md}px !important`,
          overflow: "hidden",
          "&:before": { display: "none" },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: { paddingInline: "1.5rem" },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { paddingInline: "1.5rem", paddingBottom: "1.5rem" },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          border: `1px solid ${t.vars.palette.divider}`,
        }),
      },
    },
  },
});

export default theme;