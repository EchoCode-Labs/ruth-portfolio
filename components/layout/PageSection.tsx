import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { ContainerProps } from "@mui/material/Container";

type SectionTone = "default" | "soft" | "inverted";

interface PageSectionProps {
  children: ReactNode;
  tone?: SectionTone;
  maxWidth?: ContainerProps["maxWidth"];
  id?: string;
}

const toneStyles: Record<SectionTone, object> = {
  default: {
    bgcolor: "background.default",
    color: "text.primary",
  },
  soft: {
    bgcolor: "brand.taupeSoft",
    color: "text.primary",
  },
  inverted: {
    bgcolor: "brand.espresso",
    color: "brand.cream",
  },
};

/**
 * Every page section goes through this wrapper so vertical spacing and
 * background tone stay consistent without repeating `sx` on each page.
 */
export default function PageSection({
  children,
  tone = "default",
  maxWidth = "lg",
  id,
}: PageSectionProps) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 }, ...toneStyles[tone] }}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}