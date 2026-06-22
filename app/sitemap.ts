import { MetadataRoute } from "next";

const BASE_URL = "https://iv7-s.com";

const blogSlugs = [
  "iv7-game-download-guide",
  "iv7-referral-program-guide",
  "iv7-rewards-system",
  "iv7-game-features",
  "latest-updates",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}
