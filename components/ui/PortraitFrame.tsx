"use client";

import Box from "@mui/material/Box";
import Image from "next/image";

interface PortraitFrameProps {
  src: string;
  alt: string;
  shape?: "rounded" | "circle";
  priority?: boolean;
}

/**
 * Recreates the white-bordered rounded photo frame used for Ruth's headshot
 * throughout the original deck. Swap `src` for the real exported Canva
 * image once it's dropped into /public/images.
 */
export default function PortraitFrame({
  src,
  alt,
  shape = "rounded",
  priority = false,
}: PortraitFrameProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: shape === "circle" ? "1 / 1" : "4 / 5",
        maxWidth: 440,
        borderRadius: shape === "circle" ? "50%" : 6,
        border: "6px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "brand.taupeLight" : "background.paper",
        boxShadow: "0 24px 48px -24px rgba(36, 24, 17, 0.45)",
        overflow: "hidden",
        bgcolor: "brand.taupeSoft",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 600px) 80vw, 440px"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}