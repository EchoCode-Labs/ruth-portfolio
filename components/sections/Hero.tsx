"use client";

import NextLink from "next/link";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import PillBadge from "@/components/ui/PillBadge";
import ChevronMotif from "@/components/ui/ChevronMotif";
import DotIndicator from "@/components/ui/DotIndicator";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { fontFamilies } from "@/theme/token";
import { profile, heroStats } from "@/data/content";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeScaleIn = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const floatY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
`;

/** Staggered fade-up entrance, applied once on mount (not scroll-triggered — this is above the fold). */
const enter = (delayMs: number) => ({
  animation: `${fadeUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) both`,
  animationDelay: `${delayMs}ms`,
});

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "brand.espresso",
        color: "brand.cream",
        pt: { xs: 12, md: 14 },
        pb: { xs: 10, md: 14 },
      }}
    >
      {/* Decorative oversized chevron watermark — purely visual, echoes the brand motif without competing with content */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: { xs: -60, md: -100 },
          right: { xs: -80, md: -40 },
          opacity: 0.05,
          transform: "scale(6)",
          transformOrigin: "top right",
          pointerEvents: "none",
          display: { xs: "none", sm: "block" },
        }}
      >
        <ChevronMotif direction="forward" size={64} />
      </Box>

      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2.5, sm: 4, md: 6 }, position: "relative" }}>
        <Grid container spacing={{ xs: 7, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3} sx={{ maxWidth: 580 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={enter(0)}
              >
                <ChevronMotif direction="forward" />
                <DotIndicator count={5} activeIndex={0} />
              </Stack>

              <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={enter(80)}>
                <PillBadge>Welcome to my portfolio</PillBadge>
                <Stack
                  direction="row"
                  spacing={0.75}
                  alignItems="center"
                  sx={{
                    px: 1.5,
                    py: 0.6,
                    borderRadius: 999,
                    border: "1px solid",
                    borderColor: "rgba(217, 199, 188, 0.35)",
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      bgcolor: "#9DC88D",
                      animation: `${pulse} 2s ease-in-out infinite`,
                    }}
                  />
                  <Typography
                    variant="eyebrow"
                    sx={{ color: "brand.taupeLight", fontSize: "0.72rem" }}
                  >
                    {profile.availability}
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                variant="h1"
                component="h1"
                sx={{ color: "brand.cream", ...enter(160) }}
              >
                {profile.name}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ color: "brand.taupeLight", ...enter(240) }}
              >
                {profile.role}
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "rgba(251, 246, 241, 0.85)", ...enter(300) }}
              >
                {profile.tagline}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1, ...enter(380) }}>
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

              <Box sx={enter(440)}>
                <Button
                  href={profile.cvFile}
                  download
                  variant="text"
                  startIcon={<DownloadRoundedIcon fontSize="small" />}
                  sx={{
                    color: "brand.taupeLight",
                    px: 0,
                    "&:hover": { bgcolor: "transparent", color: "brand.cream" },
                  }}
                >
                  Download CV
                </Button>
              </Box>

              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "rgba(217, 199, 188, 0.24)" }}
                  />
                }
                spacing={{ xs: 2.5, sm: 4 }}
                sx={{ pt: 2, ...enter(500) }}
              >
                {heroStats.map((stat) => (
                  <Stack key={stat.label} spacing={0.25}>
                    <Typography
                      sx={{
                        fontFamily: fontFamilies.display,
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        color: "brand.cream",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(251, 246, 241, 0.65)", fontSize: "0.78rem" }}
                    >
                      {stat.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Box sx={enter(560)}>
                <ChevronMotif direction="both" size={22} />
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 440,
                animation: `${fadeScaleIn} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms both, ${floatY} 6s ease-in-out 1000ms infinite`,
              }}
            >
              <PortraitFrame
                src="/images/hero-portrait.jpeg"
                alt={`${profile.name}, Virtual Assistant`}
                priority
              />

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  position: "absolute",
                  bottom: { xs: -14, sm: -18 },
                  left: { xs: -10, sm: -18 },
                  bgcolor: "background.paper",
                  color: "text.primary",
                  borderRadius: 3,
                  px: 1.75,
                  py: 1.1,
                  boxShadow: "0 16px 32px -14px rgba(36, 24, 17, 0.5)",
                  border: "1px solid",
                  borderColor: "divider",
                  animation: `${fadeUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 900ms both`,
                }}
              >
                <VerifiedRoundedIcon sx={{ color: "brand.taupe", fontSize: 22 }} />
                <Stack spacing={0}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.8rem", lineHeight: 1.2 }}>
                    2 Certifications
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.7rem" }}>
                    Skill2Scale Digital
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}