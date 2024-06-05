/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'http://localhost:4000/'
      }
    ]
  }
};

export default nextConfig;
