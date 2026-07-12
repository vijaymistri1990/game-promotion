import { MetadataRoute } from "next";

const BASE_URL = "https://iv7-s.com";

const blogSlugs = [
  "iv7-game-download-guide",
  "iv7-referral-program-guide",
  "iv7-rewards-system",
  "iv7-game-features",
  "latest-updates",
];

const staticPages = [
  "",
  "/about",
  "/licenses",
  "/responsible-gaming",
  "/faq",
  "/contact",
  "/disclaimer",
  "/privacy-policy",
  "/terms-conditions"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
