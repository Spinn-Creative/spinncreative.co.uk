/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['randomuser.me'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.spinncreative.co.uk'
        }
      ]
    }
  }

  module.exports = nextConfig
