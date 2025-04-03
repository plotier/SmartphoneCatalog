import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["prueba-tecnica-api-tienda-moviles.onrender.com"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
