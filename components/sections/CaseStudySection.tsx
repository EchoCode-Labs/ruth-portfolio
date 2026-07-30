import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PageSection from "@/components/layout/PageSection";
import PillBadge from "@/components/ui/PillBadge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaCarousel from "@/components/ui/Mediacarousel";
import { getToolIcon } from "@/data/toolIcons";
import type { CaseStudy } from "@/data/types";

interface CaseStudySectionProps {
  study: CaseStudy;
  tone?: "default" | "soft";
}

export default function CaseStudySection({ study, tone = "default" }: CaseStudySectionProps) {
  return (
    <PageSection tone={tone} id={study.slug}>
      <Stack spacing={6}>
        <ScrollReveal>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2.5}>
                <PillBadge>Case study {study.index}</PillBadge>
                <Typography variant="h2" component="h2">
                  {study.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Client: {study.client}
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography variant="h6" color="text.secondary">
                    Objective
                  </Typography>
                  <Typography variant="body1">{study.objective}</Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="h6" color="text.secondary">
                    Tools used
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {study.tools.map((tool) => {
                      const ToolIcon = getToolIcon(tool);
                      return (
                        <Chip
                          key={tool}
                          label={tool}
                          size="small"
                          icon={<ToolIcon sx={{ fontSize: "1rem !important" }} />}
                        />
                      );
                    })}
                  </Box>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="h6" color="text.secondary">
                    Key contributions
                  </Typography>
                  <List dense disablePadding>
                    {study.contributions.map((item) => (
                      <ListItem
                        key={item}
                        disableGutters
                        sx={{ py: 0.5, display: "flex", gap: 1.25, alignItems: "flex-start" }}
                      >
                        <Box
                          sx={{
                            mt: 1,
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: "brand.taupe",
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <Stack spacing={1.5}>
            <Typography variant="h6" color="text.secondary">
              Project screenshots
            </Typography>
            <MediaCarousel
              items={study.media}
              slideWidth={420}
              aspectRatio={study.mediaAspectRatio ?? "4 / 3"}
              objectFit={study.mediaObjectFit ?? "contain"}
            />
          </Stack>
        </ScrollReveal>
      </Stack>
    </PageSection>
  );
}