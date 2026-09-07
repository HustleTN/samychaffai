import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.samychaffai.com/sitemap.xml",
    host: "https://www.samychaffai.com",
  };
}
