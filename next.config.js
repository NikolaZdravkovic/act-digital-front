/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
