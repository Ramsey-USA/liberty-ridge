/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // Add base path if deploying to a subdirectory
  // basePath: '/liberty-ridge',
}

module.exports = nextConfig