import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ['import'],
  },
};

export default nextConfig;
