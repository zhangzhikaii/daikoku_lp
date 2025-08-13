import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // 静态站点中 <Image> 需要关闭优化
    // formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
