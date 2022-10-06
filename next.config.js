/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["unsplash.it", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
