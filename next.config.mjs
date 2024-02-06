// next.config.mjs
import TerserPlugin from "terser-webpack-plugin";

const nextConfig = {
  // Your other configurations...

  babel: {
    presets: [
      [
        "next/babel",
        {
          "preset-env": {
            useBuiltIns: "usage",
            corejs: 3,
          },
        },
      ],
    ],
  },

  webpack: (config, { isServer }) => {
    // Only run TerserPlugin on the client side (not for server-side rendering)
    if (!isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            // Your Terser options go here
            // For example, you can enable/disable certain features
            compress: {
              drop_console: true,
            },
          },
        })
      );
    }

    return config;
  },
};

export default nextConfig;
