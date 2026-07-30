import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {fontFamilies} from "@/theme/token";

export type LogoTone = "auto" | "light";

interface LogoProps {
  size?: number;
  /**
   * "auto" sits directly on whatever's behind it (fine on the light Header,
   * where the AppBar background gives enough contrast). "light" wraps the
   * icon in a small pale chip — use this on fixed dark backgrounds like the
   * Footer, since the logo's gold tone loses contrast directly on dark
   * brown.
   */
  tone?: LogoTone;
  showWordmark?: boolean;
}

export default function Logo({ size = 40, tone = "auto", showWordmark = true }: LogoProps) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="center">
      <Box
        sx={{
          position: "relative",
          width: size,
          height: size,
          flexShrink: 0,
          borderRadius: tone === "light" ? "28%" : 0,
          bgcolor: tone === "light" ? "brand.cream" : "transparent",
          p: tone === "light" ? 0.5 : 0,
        }}
      >
        <Image
          src="/images/logo/ruth-icon.png"
          alt="Ruth Chika logo"
          fill
          sizes={`${size}px`}
          style={{ objectFit: "contain" }}
        />
      </Box>
      {showWordmark ? (
        <Stack spacing={0} sx={{ lineHeight: 1 }}>
          <Typography
            variant="h6"
            sx={{
              lineHeight: 1.15,
              color: tone === "light" ? "brand.cream" : "text.primary",
            }}
          >
            Ruth Chika
          </Typography>
          <Typography
            sx={{
              fontFamily: fontFamilies.accent,
              fontWeight: 600,
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: tone === "light" ? "brand.taupeLight" : "text.secondary",
            }}
          >
            Virtual Assistant
          </Typography>
        </Stack>
      ) : null}
    </Stack>
  );
}