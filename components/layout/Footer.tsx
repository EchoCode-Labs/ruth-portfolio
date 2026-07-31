"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Logo from "@/components/ui/Logo";
import { contactChannels, navItems, profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "brand.espressoDeep",
        color: "brand.cream",
        mt: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 4 }}
          justifyContent="space-between"
        >
          <Stack spacing={2} sx={{ maxWidth: 340 }}>
            <Logo tone="light" size={40} />
            <Typography variant="body2" sx={{ color: "brand.taupeLight" }}>
              {profile.tagline}
            </Typography>
            <Link
              href={profile.cvFile}
              download
              underline="hover"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                color: "brand.cream",
                fontWeight: 600,
              }}
            >
              <DownloadRoundedIcon fontSize="small" />
              Download CV
            </Link>
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="eyebrow" sx={{ color: "brand.taupeLight" }}>
              Navigate
            </Typography>
            {navItems.map((item) => (
              <Link
                key={item.href}
                component={NextLink}
                href={item.href}
                underline="hover"
                sx={{ color: "brand.cream" }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <Stack spacing={1.5}>
            <Typography variant="eyebrow" sx={{ color: "brand.taupeLight" }}>
              Get in touch
            </Typography>
            {contactChannels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                underline="hover"
                sx={{ color: "brand.cream" }}
              >
                {channel.value}
              </Link>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "rgba(217, 199, 188, 0.24)", my: 5 }} />

        <Typography variant="body2" sx={{ color: "brand.taupeLight" }}>
          © {year} {profile.name}. Built with care, for clients who need a business partner they
          can rely on.
        </Typography>
      </Container>
    </Box>
  );
}