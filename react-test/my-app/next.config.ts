import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.ZITADEL_ISSUER.slice(8),
                pathname: '/assets/v1/**',
            }
        ]
    }
};

export default nextConfig;
