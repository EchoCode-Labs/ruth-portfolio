import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import {fontFamilies, radii } from "@/theme/token";

interface PillBadgeProps {
  children: ReactNode;
}

export default function PillBadge({ children }: PillBadgeProps) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        px: 2.25,
        py: 0.9,
        borderRadius: `${radii.pill}px`,
        bgcolor: "brand.taupeSoft",
        border: "1px solid",
        borderColor: "divider",
        fontFamily: fontFamilies.accent,
        fontWeight: 600,
        fontSize: "0.8rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "text.primary",
      }}
    >
      {children}
    </Box>
  );
}