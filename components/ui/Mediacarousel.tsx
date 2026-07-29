"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export interface CarouselItem {
  src: string;
  alt: string;
  caption?: string;
}

interface MediaCarouselProps {
  items: CarouselItem[];
  /** Milliseconds between auto-advances. */
  autoPlayInterval?: number;
  /** Roughly how wide each slide is, before it's clamped to the viewport. */
  slideWidth?: number;
  /** Image aspect ratio for every slide, e.g. "16 / 10". */
  aspectRatio?: string;
}

const GAP_PX = 20;
const RESUME_DELAY_MS = 2200;
const AUTO_SCROLL_SETTLE_MS = 650;

export default function MediaCarousel({
  items,
  autoPlayInterval = 4000,
  slideWidth = 420,
  aspectRatio = "16 / 10",
}: MediaCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const autoScrollingRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [touchPaused, setTouchPaused] = useState(false);

  // Auto-advance loop
  useEffect(() => {
    if (items.length <= 1) return;

    const intervalId = setInterval(() => {
      const scroller = scrollerRef.current;
      if (!scroller || isHovering || touchPaused || isDraggingRef.current) return;

      const step = (firstItemRef.current?.offsetWidth ?? slideWidth) + GAP_PX;
      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
      const nextLeft = scroller.scrollLeft + step;

      autoScrollingRef.current = true;
      if (nextLeft >= maxScrollLeft - 4) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroller.scrollBy({ left: step, behavior: "smooth" });
      }
      window.setTimeout(() => {
        autoScrollingRef.current = false;
      }, AUTO_SCROLL_SETTLE_MS);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [items.length, isHovering, touchPaused, autoPlayInterval, slideWidth]);

  const scheduleTouchResume = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setTouchPaused(false), RESUME_DELAY_MS);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scroller.scrollLeft;
    scroller.setPointerCapture(event.pointerId);
    scroller.style.cursor = "grabbing";
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const delta = event.clientX - dragStartXRef.current;
    scroller.scrollLeft = dragStartScrollLeftRef.current - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const scroller = scrollerRef.current;
    isDraggingRef.current = false;
    if (scroller) scroller.style.cursor = "grab";
  };

  const handleTouchStart = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setTouchPaused(true);
  };

  const handleTouchEnd = () => {
    scheduleTouchResume();
  };

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <Box
      ref={scrollerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      sx={{
        display: "flex",
        gap: `${GAP_PX}px`,
        overflowX: "auto",
        overflowY: "hidden",
        scrollSnapType: "x proximity",
        cursor: "grab",
        // Hide the scrollbar; the carousel is navigated by drag/swipe/autoplay.
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
        pb: 0.5,
      }}
    >
      {items.map((item, index) => (
        <Stack
          key={item.src}
          ref={index === 0 ? firstItemRef : undefined}
          spacing={1.5}
          sx={{
            flex: `0 0 min(${slideWidth}px, 85vw)`,
            scrollSnapAlign: "start",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio,
              borderRadius: 3,
              overflow: "hidden",
              border: "2px solid",
              borderColor: "brand.taupeLight",
              boxShadow: "0 16px 32px -20px rgba(36, 24, 17, 0.4)",
              bgcolor: "brand.taupeSoft",
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              draggable={false}
              sizes="(max-width: 600px) 85vw, 420px"
              style={{ objectFit: "contain", pointerEvents: "none" }}
            />
          </Box>
          {item.caption ? (
            <Typography variant="body2" color="text.secondary">
              {item.caption}
            </Typography>
          ) : null}
        </Stack>
      ))}
    </Box>
  );
}