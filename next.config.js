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
  webpack(config) {
    // Configure file loaders
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
};

module.exports = nextConfig; 