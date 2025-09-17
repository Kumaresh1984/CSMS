/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: process.env.BASEPATH,
  assetPrefix: ''
}

export default nextConfig
