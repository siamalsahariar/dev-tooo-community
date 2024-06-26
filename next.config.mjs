const path = require("path");
const loaderUtils = require("loader-utils");
const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin");

// based on https://github.com/vercel/next.js/blob/992c46e63bef20d7ab7e40131667ed3debaf67de/packages/next/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent.ts
// const hashOnlyIdent = (context, _, exportName) =>
//   loaderUtils
//     .getHashDigest(
//       Buffer.from(
//         `filePath:${path
//           .relative(context.rootContext, context.resourcePath)
//           .replace(/\\+/g, "/")}#className:${exportName}`
//       ),
//       "md4",
//       "base64",
//       6
//     )
//     .replace(/^(-?\d|--)/, "_$1")
//     .replaceAll("+", "_")
//     .replaceAll("/", "_");

module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    APP_NAME: "COIN_PLANET",
    API: "http://localhost:8081/api",
    PRODUCTION: true,
    DOMAIN: "http://localhost:3000",
  },
  images: {
    domains: [""],
  },
  webpack(config, { dev }) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.filter((rule) => Array.isArray(rule.use));

    if (!dev)
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes("css-loader") &&
            !moduleLoader.loader?.includes("postcss-loader")
          )
            moduleLoader.options.modules.getLocalIdent = (
              context,
              _,
              exportName
            ) =>
              loaderUtils
                .getHashDigest(
                  Buffer.from(
                    `filePath:${path
                      .relative(context.rootContext, context.resourcePath)
                      .replace(/\\+/g, "/")}#className:${exportName}`
                  ),
                  "md4",
                  "base64",
                  6
                )
                .replaceAll("/", "_")
                .replace(/^(-?\d|--)/, "_$1")
                .replaceAll("+", "_");
        });
      });

    if (!dev) {
      config.plugins.push(
        new MangleCssClassPlugin({
          classNameRegExp:
            "((hover|focus|sm|md|lg|xl)[\\\\]*:)*(tw)-[a-zA-Z0-9-[#-_-]*",
          ignorePrefixRegExp: "",
          log: false,
          classGenerator: (original) => {
            const newClass = original
              .replace(/tw-/g, "")
              .replace(/grid/, "g")
              .replace(/auto/, "au")
              .replace(/border/g, "b")
              .replace(/center/g, "ctr")
              .replace(/rounded/g, "rd")
              .replace(/max-content/, "mc")
              .replace(/maxcontent/, "mc")
              .replace(/-/g, "NEGATIVE")
              .replace(/#/g, "")
              .replace(/sm:/, "1")
              .replace(/md:/, "2")
              .replace(/lg:/, "3")
              .replace(/xl:/, "4")
              .replace(/\[/, "")
              .replace(/\]/, "");

            // return btoa(newClass).replace(/=/g, '');
            return Buffer.from(newClass).toString("base64").replace(/=/g, "");
          },
        })
      );
    }

    return config;
  },
};
