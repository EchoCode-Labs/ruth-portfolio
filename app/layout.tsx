import type { Metadata, Viewport } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/content";

const displayFont = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const accentFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

const siteUrl = "https://ezinwokeruth.com";
const siteTitle = `${profile.name} — ${profile.role}`;
const siteDescription = `${profile.tagline} ${profile.bio}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Virtual Assistant",
    "Executive Assistant",
    "Administrative Support",
    "Ezinwoke Ruth Chika",
    "VA for hire",
    "Remote Virtual Assistant Nigeria",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: profile.tagline,
    siteName: siteTitle,
    images: [
      {
        url: "/images/hero-portrait.svg",
        width: 880,
        height: 1100,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: profile.tagline,
    images: ["/images/hero-portrait.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF6F1" },
    { media: "(prefers-color-scheme: dark)", color: "#241811" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <InitColorSchemeScript attribute="data-mui-color-scheme" />
      </head>
      <body>
        <ThemeRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}