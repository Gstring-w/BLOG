const path = require("path");
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new DllReferencePlugin({
      manifest: require("../dist/react.manifest.json")
    }),
    new DllReferencePlugin({
      manifest: require("../dist/polyfill.manifest.json")
    })
  ]
};
