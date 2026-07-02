import React from "react";

const SITE_URL = "https://iv7-s.com";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IV7 Gaming",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 400,
      height: 120,
    },
    description:
      "IV7 is the ultimate gaming platform. Play real cash games like Aviator Pro, Dragon Tiger, and Teen Patti. Enjoy exclusive IPL benefits and a billion-dollar referral rewards program.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    sameAs: [
      "https://twitter.com/iv7game",
      "https://discord.gg/iv7game",
      "https://youtube.com/iv7game",
      "https://instagram.com/iv7game",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
