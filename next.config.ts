import type { NextConfig } from "next";

const nextConfig: NextConfig & { eslint?: any } = {
  images: {
    domains: ["cdn.gadgetbytenepal.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;