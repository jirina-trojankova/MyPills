const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const config = require("./config/config.dev");

const src = path.resolve(__dirname, "src");

module.exports = merge(common(config), {
  mode: "development",

  devtool: "source-map",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    contentBase: src,
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    quiet: false,
    open: true,
  }
});