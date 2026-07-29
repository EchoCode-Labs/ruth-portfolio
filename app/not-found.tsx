"use client";

import NextLink from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PageSection from "@/components/layout/PageSection";
import ChevronMotif from "@/components/ui/ChevronMotif";

export default function NotFound() {
  return (
    <PageSection tone="inverted" maxWidth="sm">
      <Stack spacing={3} alignItems="center" textAlign="center">
        <ChevronMotif direction="both" size={26} />
        <Typography variant="h2" sx={{ color: "brand.cream" }}>
          Page not found
        </Typography>
        <Typography variant="body1" sx={{ color: "rgba(251, 246, 241, 0.85)" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </Typography>
        <Button
          component={NextLink}
          href="/"
          variant="contained"
          size="large"
          sx={{
            bgcolor: "brand.taupeLight",
            color: "brand.espressoDeep",
            "&:hover": { bgcolor: "brand.taupe" },
          }}
        >
          Back to home
        </Button>
      </Stack>
    </PageSection>
  );
}