/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vogue.oss-cn-hangzhou.aliyuncs.com",
      },
    ],
  },
};

export default nextConfig;
