/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
};

module.exports = nextConfig;
