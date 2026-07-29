import Box from "@mui/material/Box";

interface ChevronMotifProps {
  direction?: "forward" | "back" | "both";
  size?: number;
}

export default function ChevronMotif({
  direction = "forward",
  size = 28,
}: ChevronMotifProps) {
  const chevron = (flip: boolean) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M2 5L9 12L2 19"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.55}
      />
    </svg>
  );

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        color: "brand.taupe",
        lineHeight: 0,
      }}
    >
      {(direction === "back" || direction === "both") && chevron(true)}
      {direction !== "back" && chevron(false)}
    </Box>
  );
}