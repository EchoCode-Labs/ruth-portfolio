"use client";

import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import PageSection from "@/components/layout/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqs } from "@/data/content";

export default function FaqSection() {
  return (
    <PageSection tone="soft" id="faq">
      <Stack spacing={5}>
        <ScrollReveal>
          <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
        </ScrollReveal>

        <Stack spacing={2}>
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={Math.min(index, 5) * 70} distance={14}>
              <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ScrollReveal>
          ))}
        </Stack>
      </Stack>
    </PageSection>
  );
}