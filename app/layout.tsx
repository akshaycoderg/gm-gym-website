import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/lib/site";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gm-gym-jankipuram.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GM GYM | Gym in Jankipuram, Lucknow — Strength & Conditioning",
    template: "%s | GM GYM",
  },
  description:
    "GM GYM is Jankipuram's trusted hub for strength and conditioning. Gym behind Sahara States, Lucknow. Beginner-friendly guidance, strength, cardio and functional training. Call +91 94533 26595.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  category: "fitness",
  keywords: [
    "gym in Jankipuram",
    "gym in Lucknow",
    "GM GYM Jankipuram",
    "fitness centre Lucknow",
    "strength training Lucknow",
    "gym behind Sahara States",
    "gym near Sahara States Lucknow",
    "personal trainer Jankipuram",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: "GM GYM | Strength & Conditioning in Jankipuram, Lucknow",
    description:
      "Transform your body. Transform your life. Jankipuram's trusted hub for strength and conditioning — behind Sahara States, Lucknow.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 2000,
        height: 1333,
        alt: "Athlete training in a gym — illustrative image for GM GYM.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GM GYM | Strength & Conditioning in Jankipuram, Lucknow",
    description:
      "Jankipuram's trusted hub for strength and conditioning. Book a free trial at GM GYM.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050605",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: site.name,
  description:
    "GM GYM is a strength and conditioning gym in Jankipuram, Lucknow, behind Sahara States. Beginner-friendly guidance, strength training, cardio and functional training.",
  url: siteUrl,
  image: `${siteUrl}/images/hero.jpg`,
  telephone: "+919453326595",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Behind Sahara States, Sector F / Sector D, Jankipuram",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "06:00",
      closes: "21:30",
    },
  ],
  hasMap: site.mapsDirectionsUrl,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${inter.variable}`}
    >
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-lime focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <ScrollReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
