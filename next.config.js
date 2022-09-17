/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  i18n: {
    locales: ['en', 'fr','pt'],
    defaultLocale: 'en',
  },
  eslint: {
    ignoreDuringBuilds: true
  },
}


module.exports = nextConfig
