"use client";

import NextLink from "next/link";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { skillGroups } from "@/data/content";

export default function ServicePillars() {
  return (
    <PageSection tone="soft">
      <Stack spacing={6}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="What I bring"
            title="Support built around how your business actually runs"
            lede="Four areas clients lean on me for most — see the full skill list on the About page."
          />
        </ScrollReveal>

        <Grid container spacing={3}>
          {skillGroups.map((group, index) => (
            <Grid key={group.title} size={{ xs: 12, sm: 6, lg: 3 }}>
              <ScrollReveal delay={index * 100} distance={18}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack spacing={1.5}>
                      <Typography variant="h5">{group.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {group.items.slice(0, 3).join(" · ")}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        <ScrollReveal delay={skillGroups.length * 100}>
          <Link
            component={NextLink}
            href="/about"
            underline="hover"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            See all skills & tools <ArrowOutwardRoundedIcon fontSize="small" />
          </Link>
        </ScrollReveal>
      </Stack>
    </PageSection>
  );
}