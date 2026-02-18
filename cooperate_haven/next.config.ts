import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // Allow external image sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // allow all paths from Unsplash
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**", // optional: if using Lorem Picsum placeholders
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**", // allow all paths from Unsplash
      },
    ],
  },
}

export default nextConfig
