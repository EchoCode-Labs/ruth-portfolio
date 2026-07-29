import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    eyebrow: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    eyebrow?: React.CSSProperties;
  }

  interface Palette {
    brand: {
      espresso: string;
      espressoDeep: string;
      espressoSurface: string;
      taupe: string;
      taupeLight: string;
      taupeSoft: string;
      cream: string;
      creamDeep: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      espresso: string;
      espressoDeep: string;
      espressoSurface: string;
      taupe: string;
      taupeLight: string;
      taupeSoft: string;
      cream: string;
      creamDeep: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    eyebrow: true;
  }
}