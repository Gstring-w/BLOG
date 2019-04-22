/*
 *  react主要的打包文件
 *  1. 公共代码的分离
 */
// 自动提取html，和清理输出到dist 以前版本的文件
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackplugin = require("clean-webpack-plugin");

// 热模块更新，以及各个更新模块重新命名
const HotModuleReplacrmentPlugin = require("webpack/lib/HotModuleReplacementPlugin");
const NameModulesPlugin = require("webpack/lib/NamedModulesPlugin");

// 定义环境变量
const DefinePlugin = require("webpack/lib/DefinePlugin");

const path = require("path");
const fs = require("fs");

// html-webpack-plugin 插件的loading
const loading = {
  html: fs.readFileSync(path.resolve(__dirname, "../src/assets/loading.html"))
};

// 以文件的方式输出css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css tree tree shaking
const glob = require("glob-all");
const PurifyCSSPlugin = require("purifycss-webpack");

// const WebpackDeepScopeAnalysisPlugin = require("webpack-deep-scope-plugin")
//   .default;

module.exports = function(env = {}, argv) {
  let plugins = [];
  const isProduction = env["production"];

  plugins = [
    new HotModuleReplacrmentPlugin(),
    new NameModulesPlugin(),

    new CleanWebpackplugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/assets/index.html"),
      filename: "index.html",
      loading: loading
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      path: path.resolve(__dirname, "../dist")
    })
  ];

  //定义环境变量
  if (isProduction) {
    plugins.push(
      new DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    );
    plugins.push(
      new PurifyCSSPlugin({
        paths: glob.sync([
          path.join(__dirname, "../src/*.html"),
          path.join(__dirname, "../src/*.js")
        ])
      })
    );
    // plugins.push(new WebpackDeepScopeAnalysisPlugin());
  } else {
    plugins.push(
      new DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        }
      })
    );
  }

  //开启css压缩

  const config = {
    context: path.resolve(__dirname, "../src"),

    entry: {
      index: [
        "react-hot-loader/patch",
        path.resolve(__dirname, "../src") + "/index.js"
      ]
    },
    output: {
      filename: "[name][hash:4].js",
      path: path.resolve(__dirname, "../dist"),
      chunkFilename: "[name].js"
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["babel-loader"],
          exclude: path.resolve(__dirname, "../node_modules"),
          include: path.resolve(__dirname, "../src")
        },
        {
          test: /\.scss/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: isProduction
                  ? [require("autoprefixer")(), require("cssnano")()]
                  : [require("autoprefixer")()]
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.(jpg|png|jpeg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "[name][hash:5].[ext]",
                limit: 8192
              }
            }
          ]
        }
      ]
    },

    watch: isProduction ? false : true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    },

    devServer: {
      port: 12306,
      hot: true
    },
    //js spliting
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            name: "common",
            chunks: "all",
            minSize: 1,
            minChunks: 2,
            priority: 1
          },
          vendor: {
            name: "vender",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "all"
          }
        }
      }
    },

    mode: isProduction ? "production" : "development",
    devtool: isProduction ? undefined : "source-map"
  };

  config["plugins"] = plugins;

  return config;
};

/**
 * 文件监听的原理：定时获取这个文件的最后编辑时间，每次都存下来最新的最后的编辑时间，
 * 如果发现当前的时间和最后一次保存的时间不一致，就认为文件发生了变化。
 * 配置相中的watchOptions.poll 用于控制定时检查周期。 每秒检查多少次
 *  当发现每个文件改动时，不会立即告诉监听者，而是先缓存起来，收集一段时间的变化后，再一次性告诉监听者
 *
 *
 * 代码分割：
 * 1.将不需要展示的代码分割出去
 * 2 再适当的时机去加载对应的代码
 *
 * Prepack
 * 就是一个部分求值器
 * 通过再编译阶段预先执行源码来得到执行结果，再直接将运行结果输出以提升性能
 */
