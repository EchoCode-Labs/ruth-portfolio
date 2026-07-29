import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder assets under /public/images ship as SVG until real Canva
    // exports (JPG/PNG) are dropped in. This is Next's documented safe
    // configuration for optimizing locally-served SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
