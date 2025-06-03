import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.tfan2437.workers.dev",
      },
    ],
  },
};

export default nextConfig;
