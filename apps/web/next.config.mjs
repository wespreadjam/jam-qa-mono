/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/jam-qa-mono',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
