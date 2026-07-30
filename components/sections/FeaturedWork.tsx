"use client";

import NextLink from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { caseStudies } from "@/data/content";

export default function FeaturedWork() {
  return (
    <PageSection tone="default">
      <Stack spacing={6}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Real systems, built for a real client"
            lede="Two case studies from my ongoing work with Glow By Rejoice Hub, a Lagos-based skincare brand."
          />
        </ScrollReveal>

        <Grid container spacing={3} alignItems="stretch">
          {caseStudies.map((study, index) => (
            <Grid key={study.slug} size={{ xs: 12, md: 6 }}>
              <ScrollReveal delay={index * 120} distance={20} sx={{ height: "100%" }}>
                <Card sx={{ height: "100%" }}>
                  <CardActionArea
                    component={NextLink}
                    href={`/projects#${study.slug}`}
                    sx={{ height: "100%", alignItems: "flex-start" }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={2}>
                        <Typography variant="eyebrow" color="text.secondary">
                          Case study {study.index}
                        </Typography>
                        <Typography variant="h4">{study.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {study.objective}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {study.tools.map((tool) => (
                            <Chip key={tool} label={tool} size="small" />
                          ))}
                        </Box>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        <ScrollReveal delay={caseStudies.length * 120}>
          <Button
            component={NextLink}
            href="/projects"
            variant="outlined"
            size="large"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{ alignSelf: "flex-start" }}
          >
            View all work
          </Button>
        </ScrollReveal>
      </Stack>
    </PageSection>
  );
}