import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cursoemvideo.com',
        port: '',
        pathname: '/wp-content/**',
        search: '',
      },
    ],
  }
};

export default nextConfig;
