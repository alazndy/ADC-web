// next.config.mjs
var nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/adc-web-473522.firebasestorage.app/o/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**"
      }
    ]
  },
  allowedDevOrigins: ["https://9000-firebase-adc-web-1759096378287.cluster-jgdkb37mtnfb4urxtja5guzqog.cloudworkstations.dev"]
};
var next_config_default = nextConfig;
export {
  next_config_default as default
};
