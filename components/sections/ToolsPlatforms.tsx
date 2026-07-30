import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { tools, softSkills } from "@/data/content";

export default function ToolsPlatforms() {
  return (
    <PageSection tone="default" id="tools">
      <Grid container spacing={{ xs: 6, md: 8 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <ScrollReveal>
            <Stack spacing={3}>
              <SectionHeading eyebrow="Tools & platforms" title="Proficient with the tools your team already uses" />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
                {tools.map((tool) => (
                  <Chip key={tool} label={tool} />
                ))}
              </Box>
            </Stack>
          </ScrollReveal>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <ScrollReveal delay={150}>
            <Stack spacing={2}>
              <Typography variant="h5">Soft skills</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
                {softSkills.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Box>
            </Stack>
          </ScrollReveal>
        </Grid>
      </Grid>
    </PageSection>
  );
}