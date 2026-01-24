import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'imposter_game'; // Matches your GitHub repository name exactly

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },

  // Base path helps Next.js understand it's running in a subdirectory
  basePath: isProd ? `/${repoName}` : '',

  // Asset prefix ensures static files (JS/CSS) are loaded from the right place
  assetPrefix: isProd ? `/${repoName}/` : '',

  // Ensure trailing slashes for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
