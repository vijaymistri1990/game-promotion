import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://iv7-s.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Blocking sensitive paths and api routes
        disallow: [
          "/api/",
          "/admin/",
          "/checkout/",
          "/user/dashboard/"
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 2,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 2,
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
