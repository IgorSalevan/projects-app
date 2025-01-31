import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // devIndicators: {
  //   appIsrStatus: false,
  // },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/projects',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
