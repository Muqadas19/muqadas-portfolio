import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stops Next.js from adding extra instruction files in this folder.
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/icons/**",
      },
    ],
  },
};

export default nextConfig;
