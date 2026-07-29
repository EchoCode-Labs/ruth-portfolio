"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Box from "@mui/material/Box";

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay before the entrance animation starts, in ms. */
  delay?: number;
  /** Distance (px) the content travels upward as it appears. */
  distance?: number;
  /** Fraction of the element that must be visible before it triggers. */
  threshold?: number;
  /** Animate every time it re-enters the viewport, instead of just once. */
  repeat?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  distance = 24,
  threshold = 0.15,
  repeat = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.unobserve(entry.target);
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, repeat]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Box>
  );
}