/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.spinncreative.co.uk'
        }
      ]
    }
  }
  
  module.exports = nextConfig
  