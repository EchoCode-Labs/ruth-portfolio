"use client";

import type { ReactNode } from "react";
import NextLink from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PageSection from "@/components/layout/PageSection";
import ChevronMotif from "@/components/ui/ChevronMotif";
import ScrollReveal from "@/components/ui/ScrollReveal";

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
        <ScrollReveal distance={16}>
          <Stack spacing={3} alignItems="center">
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
          </Stack>
        </ScrollReveal>

        <ScrollReveal delay={200} distance={12}>
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
        </ScrollReveal>
      </Stack>
    </PageSection>
  );
}