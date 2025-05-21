import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.gadgetbytenepal.com'], 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
