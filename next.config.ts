import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/findImposter' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/findImposter/' : '',
  trailingSlash: true,
};

export default nextConfig;
