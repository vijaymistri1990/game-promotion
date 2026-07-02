import React from "react";

const SITE_URL = "https://iv7-s.com";

export default function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "IV7 Gaming Platform",
    alternateName: "IV7 App",
    url: SITE_URL,
    downloadUrl: `${SITE_URL}/download`,
    operatingSystem: "iOS 12.0 or higher, Android 8.0 or higher",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Online Gaming Platform",
    genre: "Global Gaming Hub",
    inLanguage: "en",
    isAccessibleForFree: true,
    screenshot: [
      `${SITE_URL}/1.jpeg`,
      `${SITE_URL}/2.jpeg`,
      `${SITE_URL}/3.jpeg`,
      `${SITE_URL}/4.jpeg`,
    ],
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "18450",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Top Games: Aviator Pro, Dragon Tiger, Teen Patti, Andar Bahar",
      "1000+ Real Cash and Fair Play Games",
      "IV7 Referral Rewards Program",
      "Exclusive IPL Benefits",
      "24/7 Customer Support",
      "Advanced Anti-Cheat System",
      "Cross-Platform Play",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
