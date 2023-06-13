const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true
});

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ["images.ctfassets.net"]
  },
  experimental: {
    appDir: true
  }
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
