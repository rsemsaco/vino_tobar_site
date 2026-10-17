import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/vino_tobar_site',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
