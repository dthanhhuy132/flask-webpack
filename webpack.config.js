const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    home: "./static/js/home.js",
    about: "./static/js/about.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "static/dist"),
  },
  // watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ManifestPlugin({
      fileName: "manifest.json",
      publicPath: "/static/dist/",
    }),
  ],
};
