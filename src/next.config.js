/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: "/",
    swcMinify: true,
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "top-left",
    },
}

module.exports = nextConfig
