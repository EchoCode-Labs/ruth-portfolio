import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudySection from "@/components/sections/CaseStudySection";
import DesignGallery from "@/components/sections/DesignGallery";
import CtaBanner from "@/components/sections/CtaBanner";
import { caseStudies } from "@/data/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Ezinwoke Ruth Chika's work with Glow By Rejoice Hub, covering executive support systems, content strategy, and brand design.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageSection tone="inverted" maxWidth="md">
        <Stack alignItems="center" textAlign="center">
          <SectionHeading
            align="center"
            eyebrow="Case studies"
            title="Selected work"
            lede="A closer look at the systems, content, and design work behind one client relationship — Glow By Rejoice Hub."
          />
        </Stack>
      </PageSection>
      {caseStudies.map((study, index) => (
        <CaseStudySection key={study.slug} study={study} tone={index % 2 === 0 ? "default" : "soft"} />
      ))}
      <DesignGallery />
      <CtaBanner
        title="Want results like this for your business?"
        body="Every system above started with a short conversation about what was slowing the business down."
      />
    </>
  );
}