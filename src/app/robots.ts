import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://muqadas19.github.io/muqadas-portfolio/sitemap.xml",
  };
}
