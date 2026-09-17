import type { MetadataRoute } from "next";

const origin = "https://muqadas19.github.io/muqadas-portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/about", "/contact"].map((path) => ({
    url: `${origin}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
