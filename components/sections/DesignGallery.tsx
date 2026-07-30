import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { designSamples } from "@/data/content";

export default function DesignGallery() {
  return (
    <PageSection tone="soft" id="design-samples">
      <Stack spacing={6}>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Design samples"
            title="A few extra graphics, made in PixelLab"
            lede="Flyers and ads created outside client case study work, showing range across industries."
          />
        </ScrollReveal>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
          }}
        >
          {designSamples.map((sample, index) => (
            <ScrollReveal
              key={sample.src}
              delay={(index % 6) * 80}
              distance={16}
              threshold={0.1}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5",
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "3px solid",
                  borderColor: "rgba(255,255,255,0.15)",
                }}
              >
                <Image
                  src={sample.src}
                  alt={sample.alt}
                  fill
                  sizes="(max-width: 600px) 50vw, 16vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </ScrollReveal>
          ))}
        </Box>

        <ScrollReveal delay={100}>
          <Typography variant="body2" color="text.secondary">
            Tool used: PixelLab
          </Typography>
        </ScrollReveal>
      </Stack>
    </PageSection>
  );
}