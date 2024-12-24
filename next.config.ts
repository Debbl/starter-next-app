import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withBundleAnalyzer = bundleAnalyzer({
  // eslint-disable-next-line n/prefer-global/process
  enabled: process.env.ANALYZE === "true",
});

// webpack for lingui
// webpack: (config) => {
//   config.module.rules.push({
//     test: /\.po$/,
//     use: {
//       loader: "@lingui/loader",
//     },
//   });
//   return config;
// },

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    reactCompiler: true,
    swcPlugins: [["@lingui/swc-plugin", {}]],
    turbo: {
      rules: {
        "*.po": {
          loaders: ["@lingui/loader"],
          as: "*.js",
        },
      },
    },
  },
};

export default withBundleAnalyzer(nextConfig);
