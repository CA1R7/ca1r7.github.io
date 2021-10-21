require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mainPath = path.join(__dirname, "./src");
const buildPath = path.join(__dirname, "./build");

console.log("[MODE_CLIENT]: " + process.env.mode);

module.exports = {
  entry: `${mainPath}/index.tsx`,
  output: {
    path: buildPath,
    filename: "bundle.js",
  },
  mode: process.env.mode,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|mp4|svg|woff|otf|ttf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    // set all envirments into window object.
    new webpack.DefinePlugin({ ...process.env }),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
  ],
};
