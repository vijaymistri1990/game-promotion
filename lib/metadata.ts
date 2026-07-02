import type { Metadata } from "next";

const SITE_URL = "https://iv7-s.com";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function constructMetadata({
  title = "IV7 Game APK Download, IV7 APP & IV7 New Launch (2026 Guide)",
  description = "Get the official IV7 Game APK Download and IV7 App in 2026. Discover the IV7 New Launch and play 1,000+ fair-play real cash games today.",
  url = SITE_URL,
  image = "/1.jpeg",
  keywords = [
    "IV7 Game APK Download",
    "IV7 App",
    "IV7 Rewards",
    "IV7 Aviator Pro",
    "IV7 Real Cash",
    "iv7-s.com",
    "real cash games",
    "play and earn",
  ],
  noindex = false,
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: "IV7 Gaming", url: SITE_URL }],
    creator: "IV7 Gaming",
    publisher: "IV7 Gaming",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        en: url,
      },
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "IV7 Official",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@iv7game",
      creator: "@iv7game",
      title,
      description,
      images: [image],
    },
    verification: {
      google: "google-site-verification-placeholder",
    },
  };
}
