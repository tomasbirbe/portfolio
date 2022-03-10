/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  swcMinify: true,
  images: {
    deviceSizes: [480, 768, 1024, 1200],
  },
};
