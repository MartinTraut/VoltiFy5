/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.voltify5.de" },
      { protocol: "https", hostname: "voltify5.de" },
    ],
  },
}

export default nextConfig
