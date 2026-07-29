"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PillBadge from "@/components/ui/PillBadge";
import ChevronMotif from "@/components/ui/ChevronMotif";
import DotIndicator from "@/components/ui/DotIndicator";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "brand.espresso",
        color: "brand.cream",
        pt: { xs: 12, md: 14 },
        pb: { xs: 10, md: 14 },
      }}
    >
      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2.5, sm: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3} sx={{ maxWidth: 560 }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <ChevronMotif direction="forward" />
                <DotIndicator count={5} activeIndex={0} />
              </Stack>

              <PillBadge>Welcome to my portfolio</PillBadge>

              <Typography variant="h1" component="h1" sx={{ color: "brand.cream" }}>
                {profile.name}
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "brand.taupeLight" }}>
                {profile.role}
              </Typography>

              <Typography variant="body1" sx={{ color: "rgba(251, 246, 241, 0.85)" }}>
                {profile.tagline}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
                <Button
                  component={NextLink}
                  href="/projects"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "brand.taupeLight",
                    color: "brand.espressoDeep",
                    "&:hover": { bgcolor: "brand.taupe" },
                  }}
                >
                  View my work
                </Button>
                <Button
                  component={NextLink}
                  href="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "brand.taupeLight",
                    color: "brand.cream",
                    "&:hover": {
                      borderColor: "brand.taupeLight",
                      bgcolor: "rgba(217, 199, 188, 0.12)",
                    },
                  }}
                >
                  Let&rsquo;s work together
                </Button>
              </Stack>

              <ChevronMotif direction="both" size={22} />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", justifyContent: "center" }}>
            <PortraitFrame src="/images/hero-portrait.jpeg" alt={`${profile.name}, Virtual Assistant`} priority />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}