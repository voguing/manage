/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: process.env.GRAPHQL_SERVER,
      },
    ];
  },
};

export default nextConfig;
