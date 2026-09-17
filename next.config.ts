import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "muqadas-portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
};

export default nextConfig;
