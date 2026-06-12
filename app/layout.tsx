import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AgeNotice from "@/components/AgeNotice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://iv7-s.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030308",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IV7 Game – Official Gaming Platform | Download IV7 App",
    template: "%s | IV7 Official",
  },
  description:
    "IV7 is the ultimate gaming platform with 1,000+ fair-play games, exclusive IPL benefits, a billion-dollar referral rewards program, and 24/7 support. Download the IV7 app now.",
  keywords: [
    "IV7 Game",
    "IV7 Download",
    "IV7 App",
    "IV7 Rewards",
    "IV7 Referral Program",
    "IV7 Official Website",
    "IV7 Features",
    "IV7 Gaming Platform",
    "IV7 APK download",
    "iv7-s.com",
    "IV7 IPL rewards",
    "online gaming platform",
    "fair play games",
    "agent rewards program",
  ],
  authors: [{ name: "IV7 Gaming", url: SITE_URL }],
  creator: "IV7 Gaming",
  publisher: "IV7 Gaming",
  category: "Gaming",
  classification: "Gaming, Entertainment",
  applicationName: "IV7",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "IV7 Game – Official Gaming Platform | Download IV7 App",
    description:
      "Join IV7, the leading global gaming platform. 1,000+ fair-play games, exclusive IPL benefits, 24/7 support, and earn rewards through our billion-dollar referral program.",
    siteName: "IV7 Official",
    images: [
      {
        url: "/1.jpeg",
        width: 1200,
        height: 630,
        alt: "IV7 Gaming Platform – Download & Play Now",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iv7game",
    creator: "@iv7game",
    title: "IV7 Game – Official Gaming Platform | Download IV7 App",
    description:
      "1,000+ fair-play games, exclusive IPL benefits, and a billion-dollar IV7 referral rewards program. Download the IV7 app now.",
    images: ["/1.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon1.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon1.png",
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "IV7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite Schema for Sitelinks Searchbox eligibility
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IV7 Official",
    url: SITE_URL,
    description:
      "IV7 is the ultimate gaming platform. Download the IV7 app, earn referral rewards, and enjoy 1,000+ fair-play games.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030308] text-gray-100 font-sans selection:bg-[#DF264D] selection:text-white">
        {children}
        <AgeNotice />
      </body>
    </html>
  );
}
