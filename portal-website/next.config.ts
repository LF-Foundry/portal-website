import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/docs/windows-install",
        destination: "/help/windows-install",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
