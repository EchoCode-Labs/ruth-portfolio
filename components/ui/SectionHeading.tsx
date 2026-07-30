import type { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PillBadge from "./PillBadge";
import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        maxWidth: align === "center" ? 720 : 640,
        mx: align === "center" ? "auto" : 0,
      }}
    >
      {eyebrow ? (
        <ScrollReveal distance={12}>
          <PillBadge>{eyebrow}</PillBadge>
        </ScrollReveal>
      ) : null}
      <ScrollReveal delay={80} distance={16}>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
      </ScrollReveal>
      {lede ? (
        <ScrollReveal delay={160} distance={16}>
          <Typography variant="subtitle1" color="text.secondary">
            {lede}
          </Typography>
        </ScrollReveal>
      ) : null}
    </Stack>
  );
}