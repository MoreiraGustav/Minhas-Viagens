/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com']
  }
}

module.exports = nextConfig

// eslint-disable-next-line @typescript-eslint/no-var-requires
/*const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['media.graphassets.com']
  }
})*/
