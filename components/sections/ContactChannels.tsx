"use client";

import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageSection from "@/components/layout/PageSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { contactChannels } from "@/data/content";

export default function ContactChannels() {
  return (
    <PageSection tone="default" id="contact-channels">
      <Grid container spacing={3} alignItems="stretch">
        {contactChannels.map((channel, index) => (
          <Grid key={channel.label} size={{ xs: 12, sm: 6, md: 3 }}>
            <ScrollReveal delay={index * 90} distance={16} sx={{ height: "100%" }}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  sx={{ height: "100%" }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={0.75}>
                      <Typography variant="eyebrow" color="text.secondary">
                        {channel.label}
                      </Typography>
                      <Typography variant="h6" sx={{ wordBreak: "break-word" }}>
                        {channel.value}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </PageSection>
  );
}