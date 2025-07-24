/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: false,
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  // Configure webpack only when not using Turbopack
  webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
    // Configure file loaders
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  // Add Turbopack configuration (using the stable API)
  turbopack: {
    // Turbopack configuration options
    rules: {
      // Configure Turbopack rules here if needed
    },
  },
};

module.exports = nextConfig; 