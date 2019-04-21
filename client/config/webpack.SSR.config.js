const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
  entry: path.resolve(__dirname, "../src/index.server.js"), // 编辑服务器渲染的js
  //不将node中的模块打包进去
  target: "node",
  //为了不将node_modules目录下的文件打包进去
  externals: [nodeExternals()],
  output: {
    libraryTarget: "commonjs2",
    filename: "SSR.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["ignore-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"]
      }
    ]
  }
};

module.exports = config;
