import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 关键：启用静态导出
  output: 'export',
  images: {
    // 关键：静态站点中 <Image> 需要关闭优化
    unoptimized: true,
  },
  // 推荐：让导出结果是目录式（/about/ -> index.html），更兼容 GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
