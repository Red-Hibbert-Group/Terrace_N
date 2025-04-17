/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: false,
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