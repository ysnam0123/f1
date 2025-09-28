import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['i.ytimg.com', 'media.formula1.com'], // YouTube 썸네일 허용
  },
};

export default nextConfig;
