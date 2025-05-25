import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
