import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const origin = "https://muqadas19.github.io/muqadas-portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: origin,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
