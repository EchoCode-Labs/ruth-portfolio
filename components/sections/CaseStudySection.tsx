import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "next/image";
import PageSection from "@/components/layout/PageSection";
import PillBadge from "@/components/ui/PillBadge";
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

        <Grid container spacing={3}>
          {study.media.map((item) => (
            <Grid key={item.src} size={{ xs: 12, sm: 6 }}>
              <Stack spacing={1.5}>
                {/* Browser-window style frame: a title bar with traffic-light
                    dots, then the screenshot shown with `contain` (never
                    cropped) on a neutral backdrop so odd aspect ratios just
                    letterbox instead of losing content. */}
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 3,
                    overflow: "hidden",
                    bgcolor: "background.paper",
                    boxShadow: "0 16px 32px -20px rgba(36, 24, 17, 0.4)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                      px: 1.5,
                      py: 1,
                      bgcolor: "brand.taupeSoft",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#E5989B" }} />
                    <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#F0C987" }} />
                    <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#9DC88D" }} />
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 10",
                      bgcolor: "brand.taupeSoft",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 600px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {item.caption}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </PageSection>
  );
}