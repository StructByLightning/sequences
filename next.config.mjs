/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['pagedjs', 'es5-ext'], // Help Turbopack handle these packages
  experimental: {
    turbo: false, // Disable Turbopack, use Webpack instead
    optimizePackageImports: ['pagedjs'],
  },
  webpack(config) {
    // Configure SVG imports to be treated as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;