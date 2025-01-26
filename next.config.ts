import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output:'export',
  distDir:'dist',
  basePath: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
