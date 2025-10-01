/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/adc-web-473522.firebasestorage.app/o/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: ["https://9000-firebase-adc-web-1759096378287.cluster-jgdkb37mtnfb4urxtja5guzqog.cloudworkstations.dev"],
};

export default nextConfig;
