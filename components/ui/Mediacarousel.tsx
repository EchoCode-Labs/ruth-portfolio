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
  /** Every slide shares this width (clamped to the viewport on small screens). */
  slideWidth?: number;
  /** Every slide shares this aspect ratio too — a uniform card size across the whole row. */
  aspectRatio?: string;
  /**
   * How each image fills its frame. Use "contain" (default) when the media
   * has text/UI right up to the edges (app screenshots) — nothing gets
   * cropped, at the cost of a little matting for mismatched ratios. Use
   * "cover" when the media is forgiving of a slight edge-crop (marketing
   * graphics, flyers) and you want every frame filled edge-to-edge.
   */
  objectFit?: "contain" | "cover";
}

const GAP_PX = 20;
const RESUME_DELAY_MS = 2200;
const AUTO_SCROLL_SETTLE_MS = 650;

export default function MediaCarousel({
  items,
  autoPlayInterval = 4000,
  slideWidth = 420,
  aspectRatio = "4 / 3",
  objectFit = "contain",
}: MediaCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const autoScrollingRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollSettleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [touchPaused, setTouchPaused] = useState(false);

  // Looping needs at least 2 items to duplicate. With a single item there's
  // nothing to loop around, so we fall back to the plain, unlooped strip.
  const loopEnabled = items.length > 1;
  // Three copies back-to-back: a "previous" and "next" buffer around the
  // copy the person actually looks at, so dragging or auto-scrolling in
  // either direction always has more (identical) content ahead of it.
  const displayItems = loopEnabled ? [...items, ...items, ...items] : items;
  // Width of exactly one copy of the sequence, in px.
  const singleSetWidthRef = useRef(0);

  // Measure the strip and start centered in the middle copy.
  useEffect(() => {
    if (!loopEnabled) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const measure = () => {
      singleSetWidthRef.current = scroller.scrollWidth / 3;
    };

    measure();
    scroller.scrollLeft = singleSetWidthRef.current;

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(scroller);
    return () => resizeObserver.disconnect();
  }, [loopEnabled, items.length, slideWidth]);

  // Silently shift the scroll position by one copy-width whenever it drifts
  // outside the middle copy. Because all three copies are pixel-identical,
  // this correction is invisible — there's nothing to "see" jump.
  const normalizeScroll = () => {
    if (!loopEnabled || isDraggingRef.current) return;
    const scroller = scrollerRef.current;
    const singleWidth = singleSetWidthRef.current;
    if (!scroller || !singleWidth) return;

    if (scroller.scrollLeft >= singleWidth * 2) {
      scroller.scrollLeft -= singleWidth;
    } else if (scroller.scrollLeft < singleWidth) {
      scroller.scrollLeft += singleWidth;
    }
  };

  // Auto-advance loop — always scrolls forward; normalizeScroll() handles
  // wrapping back into the middle copy once the smooth-scroll settles.
  useEffect(() => {
    if (items.length <= 1) return;

    const intervalId = setInterval(() => {
      const scroller = scrollerRef.current;
      if (!scroller || isHovering || touchPaused || isDraggingRef.current) return;

      const step = (firstItemRef.current?.offsetWidth ?? slideWidth) + GAP_PX;
      autoScrollingRef.current = true;
      scroller.scrollBy({ left: step, behavior: "smooth" });
      window.setTimeout(() => {
        autoScrollingRef.current = false;
        normalizeScroll();
      }, AUTO_SCROLL_SETTLE_MS);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    normalizeScroll();
  };

  const handleTouchStart = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setTouchPaused(true);
  };

  const handleTouchEnd = () => {
    scheduleTouchResume();
    normalizeScroll();
  };

  // Fallback for any scroll not covered above (trackpad, mouse wheel, touch
  // momentum that continues after touchend): once scrolling has been idle
  // for a moment, check and correct the position.
  const handleNativeScroll = () => {
    if (scrollSettleTimeoutRef.current) clearTimeout(scrollSettleTimeoutRef.current);
    scrollSettleTimeoutRef.current = setTimeout(normalizeScroll, 120);
  };

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      if (scrollSettleTimeoutRef.current) clearTimeout(scrollSettleTimeoutRef.current);
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
      onScroll={handleNativeScroll}
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
        // Give the hover-lift effect on each slide room to breathe without clipping.
        py: 1,
        px: 0.5,
        mx: -0.5,
      }}
    >
      {displayItems.map((item, index) => (
        <Stack
          key={`${item.src}-${index}`}
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
              borderRadius: 4,
              overflow: "hidden",
              border: "3px solid",
              borderColor: "brand.taupe",
              boxShadow: "0 20px 40px -22px rgba(36, 24, 17, 0.45)",
              bgcolor: "brand.taupeSoft",
              transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 28px 48px -20px rgba(36, 24, 17, 0.55)",
                borderColor: "brand.taupeDark",
              },
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              draggable={false}
              sizes="(max-width: 600px) 85vw, 420px"
              style={{ objectFit, pointerEvents: "none" }}
            />
          </Box>
          {item.caption ? (
            <Typography variant="body2" color="text.secondary" sx={{ px: 0.5 }}>
              {item.caption}
            </Typography>
          ) : null}
        </Stack>
      ))}
    </Box>
  );
}