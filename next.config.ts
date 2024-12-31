import bundleAnalyzer from "@next/bundle-analyzer";
import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    reactCompiler: true,
    swcPlugins: [["@lingui/swc-plugin", {}]],
    // turbo: {
    //   rules: {
    //     "*.po": {
    //       loaders: ["@lingui/loader"],
    //       as: "*.js",
    //     },
    //   },
    // },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: "@lingui/loader",
      },
    });
    return config;
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  // eslint-disable-next-line n/prefer-global/process
  enabled: process.env.ANALYZE === "true",
});

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

function pipeline(fns: ((config: NextConfig) => NextConfig)[]) {
  return fns.reduce((acc, fn) => fn(acc), nextConfig);
}

export default pipeline([withBundleAnalyzer, withSerwist]);
