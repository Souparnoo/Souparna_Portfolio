/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/Souparna_Portfolio',
  assetPrefix: '/Souparna_Portfolio',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
}

module.exports = nextConfig