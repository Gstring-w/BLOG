/*
 * 使用HappyPack
 * 1. 处理的文件数量变得多时，webpack时基于node.js单线程的，使用webpack打包文件时会变得很慢
 */

const path = require("path");
const HappyPack = require("happypack");

module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: {
    index: path.resolve(__dirname, "../src") + "/index.js"
  },
  output: {
    filename: "[name][hash:4].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["happypack/loader?id=babel"],
        exclude: path.resolve(__dirname, "../node_modules")
      }
    ]
  },

  plugins: [
    new HappyPack({
      id: "babel",
      loaders: ["babel-loader"]
    })
  ]
};
