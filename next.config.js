const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = (_, defaultConfig) => {
  const CONFIG = {
    ...defaultConfig,
    // target: 'serverless',
    // productionBrowserSourceMaps: true,
    images: {
      domains: [""],
    },

    module: {
      rules: [
        {
          test: /\.woff$/,
          use: {
            loader: "file-loader",
          },
        },
      ],
    },

    webpack: (config, { webpack }) => {
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /^electron$/ })
      );

      const arr = config.module.rules.filter(
        (r) => !!r.test && ".svg".match(r.test)
      );
      const svgRule = { ...arr[0] };

      config.module.rules.push({
        test: /\.mdx$/,
        type: "asset/source",
      });

      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: ["@svgr/webpack"],
        exclude: /\.background\.svg$/,
      });

      config.module.rules.push({
        ...svgRule,
        test: /\.background\.svg$/,
      });

      return config;
    },

    sentry: {
      disableServerWebpackPlugin: true,
      disableClientWebpackPlugin: true,
    },
  };

  return withBundleAnalyzer(CONFIG);
};
