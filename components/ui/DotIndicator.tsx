import Box from "@mui/material/Box";

interface DotIndicatorProps {
  count?: number;
  activeIndex?: number;
}

export default function DotIndicator({
  count = 5,
  activeIndex = 0,
}: DotIndicatorProps) {
  return (
    <Box sx={{ display: "flex", gap: 1 }} aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor:
              index === activeIndex ? "brand.taupe" : "brand.taupeLight",
            opacity: index === activeIndex ? 1 : 0.5,
          }}
        />
      ))}
    </Box>
  );
}