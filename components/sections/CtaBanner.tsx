"use client";

import type { ReactNode } from "react";
import NextLink from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PageSection from "@/components/layout/PageSection";
import ChevronMotif from "@/components/ui/ChevronMotif";

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  body: ReactNode;
  actionLabel?: string;
  actionHref?: string;
}

export default function CtaBanner({
  eyebrow = "Let's work together",
  title,
  body,
  actionLabel = "Get in touch",
  actionHref = "/contact",
}: CtaBannerProps) {
  return (
    <PageSection tone="inverted">
      <Stack spacing={3} alignItems="center" textAlign="center" sx={{ maxWidth: 640, mx: "auto" }}>
        <ChevronMotif direction="both" size={26} />
        <Typography variant="eyebrow" sx={{ color: "brand.taupeLight" }}>
          {eyebrow}
        </Typography>
        <Typography variant="h2" sx={{ color: "brand.cream" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "rgba(251, 246, 241, 0.85)" }}>
          {body}
        </Typography>
        <Button
          component={NextLink}
          href={actionHref}
          variant="contained"
          size="large"
          sx={{
            bgcolor: "brand.taupeLight",
            color: "brand.espressoDeep",
            "&:hover": { bgcolor: "brand.taupe" },
          }}
        >
          {actionLabel}
        </Button>
      </Stack>
    </PageSection>
  );
}