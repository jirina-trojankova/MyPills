const path = require("path");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templatePath = path.resolve(__dirname, "template");
const srcPath = path.resolve(__dirname, "src");
const buildPath = path.resolve(__dirname, "build");
const nodeModulesPath = path.resolve(__dirname, "node_modules");

module.exports = (config) => ({
  mode: 'development',
  entry: {
    bundle: [
      'promise-polyfill/src/polyfill', // IE polyfills
      'isomorphic-fetch',
      'prototype-indexof-shim',
      path.join(srcPath, "app.tsx"),
    ],
    index: path.join(templatePath, "index.pug")
  },

  output: {
    filename: "[name].js",
    path: buildPath,
  },

  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        enforce: 'pre',
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "typings-for-css-modules-loader", // translates CSS into CommonJS
          options: {
            camelcase: true,
            modules: true,
            namedExport: true
          }
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: [nodeModulesPath],
      },
      {
        loader: "babel-loader",
        test: /\.js$/
      },
      {
        loader: "pug-loader",
        test: /\.pug$/
      },
      {
        loader: "ts-loader",
        test: /\.tsx?$/
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: path.join(templatePath, "index.pug"),
      title: "index.html",
      // favicon: path.join(template, "favicon.ico")
    }),
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify(config.API_URL),
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".webpack.js", ".web.js", ".scss"]
  },
});
