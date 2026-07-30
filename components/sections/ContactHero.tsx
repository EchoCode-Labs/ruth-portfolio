"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChevronMotif from "@/components/ui/ChevronMotif";
import PillBadge from "@/components/ui/PillBadge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { profile } from "@/data/content";

export default function ContactHero() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "brand.espresso",
        color: "brand.cream",
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "sm", mx: "auto", px: 3, textAlign: "center" }}>
        <ScrollReveal distance={16}>
          <Stack spacing={3} alignItems="center">
            <ChevronMotif direction="both" size={26} />
            <PillBadge>Let&rsquo;s work together</PillBadge>
            <Typography variant="h1" component="h1" sx={{ color: "brand.cream", fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Let&rsquo;s work together
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(251, 246, 241, 0.85)" }}>
              {profile.closingStatement}
            </Typography>
          </Stack>
        </ScrollReveal>
      </Box>
    </Box>
  );
}