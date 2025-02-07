import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // 🔥 Permitir imágenes de Unsplash
      }
    ]
  }
};

export default nextConfig;
