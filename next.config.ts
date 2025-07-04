import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.ytimg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "filipe520.github.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
