import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function IntroSection() {
  return (
    <PageSection tone="default">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2.5}>
            <SectionHeading eyebrow="Introduction" title="Welcome to my portfolio" />
            <Typography variant="body1" color="text.secondary">
              Here you&rsquo;ll find a curated collection of my work that reflects my expertise in
              virtual assistance and commitment to supporting businesses with efficiency and
              excellence.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: 6,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Image
              src="/images/workspace.jpeg"
              alt="Organized desk workspace with a laptop, notebook, and coffee"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
}