import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { profile } from "@/data/content";

export default function AboutMe() {
  return (
    <PageSection tone="default" id="about-me">
      <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", justifyContent: "center" }}>
          <PortraitFrame src="/images/hero-portrait.jpeg" alt={`${profile.name} portrait`} shape="circle" />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={2.5}>
            <SectionHeading eyebrow="About me" title="A dependable partner behind the scenes" />
            <Typography variant="body1" color="text.secondary">
              {profile.bio}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </PageSection>
  );
}