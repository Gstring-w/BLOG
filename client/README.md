# webpack_react_frame
webpack搭建react高性能框架


### React 加载性能优化
    
#####  页面加载过程

1. 用户打开页面
2. html和css加载完毕，浏览器首次渲染，我们把首次渲染需要加载的资源体积称为“==首屏体积==”
3. 然后react，react-dom，业务代码加载完毕，应用第一次渲染，称为：“==首次内容渲染==”
4. 然后代码开始执行，拉取数据，进行动态import，响应事件等，完毕后页面进入==可交互==状态
5. 接下来lazyload的图片等多媒体内容开始加载
6. 然后页面其他资源(如错误上报组件，打点上报组件等)加载完毕

##### 一.首页加载时间
###### 在react通常的模式下，首屏体积为：
1. 一个体积大小为root节点以外的什么都没有的html文件
2. 一个体积很大的js（50-1000kb）
3. 一个css文件（如果webpack里没有抽离css文件，也可能没有css文件）


###### 解决办法：可以通过ssr的方式将首屏体积中的html在js中提取出来

###### 为了用户体验，实现loading

###### 使用html-webpack-plugin 自动在html中加载loading

```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

// 读取写好的 loading 态的 html 和 css
var loading = {
    html: fs.readFileSync(path.join(__dirname, './loading.html')),
    css: '<style>' + fs.readFileSync(path.join(__dirname, './loading.css')) + '</style>'
}

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'xxxx.html',
      template: 'template.html',
      loading: loading
    })
  ]
};
```
###### 在template.html中添加

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <%= htmlWebpackPlugin.options.loading.css %>
    </head>

    <body>
        <div id="root">
            <%= htmlWebpackPlugin.options.loading.html %>
        </div>
    </body>
</html>
```

##### 如果loading本身就是一个react组件，在不做服务器渲染下，想把一个已经组件化的loading直接写入html文件中会很复杂

##### 使用[prerender-spa-plugin](https://www.npmjs.com/package/prerender-spa-plugin) 渲染首屏

[prerender-spa-plugin](https://www.npmjs.com/package/prerender-spa-plugin)是一个可以帮你在构建时就生成页面首屏 html 的一个 webpack 插件，原理大致如下：
- 指定 dist 目录和要渲染的路径
- 插件在 dist 目录中开启一个静态服务器，并且使用无头浏览器（puppeteer）访问对应的路径，执行 JS，抓取对应路径的 html。
- 把抓到的内容写入 html，这样即使没有做服务器端渲染，也能达到跟服务器端渲染几乎相同的作用（不考虑动态数据的话）

```
plugins:[
    new PrerenderSpaPlugin(
     path.join(__dirname, 'dist'),
    [ '/', '/products/1', '/products/2', '/products/3']
    )
]
```
###### 除去外链css

截止到目前，我们的首屏体积 = html + css，依然有优化的空间，那就是把外链的 css 去掉，让浏览器在加载完 html 时，即可渲染首屏。

实际上，webpack 默认就是没有外链 css 的，你什么都不需要做就可以了。当然如果你的项目之前配置了 [extract-text-webpack-plugin](https://note.youdao.com/) 或者 [mini-css-extract-plugin](https://note.youdao.com/) 来生成独立的 css 文件，直接去掉即可。

有人可能要质疑，把 css 打入 js 包里，会丢失浏览器很多缓存的好处（比如你只改了 js 代码，导致构建出的 js 内容变化，但连带 css 都要一起重新加载一次），这样做真的值得吗？

确实这么做会让 css 无法缓存，但实际上对于现在成熟的前端应用来说，缓存不应该在 js/css 这个维度上区分，而是应该按照“组件”区分，即配合动态 import 缓存组件。

接下来你会看到，css in js 的模式带来的好处远大于这么一丁点缺点

#### 二.首屏->首次内容渲染

这一段过程中，浏览器主要在做的事情就是加载、运行 JS 代码，所以如何提升 JS 代码的加载、运行性能，就成为了优化的关键。

几乎所有业务的 JS 代码，都可以大致划分成以下几个大块：
- 基础框架，如 React、Vue 等，这些基础框架的代码是不变的，除非升级框架；
- Polyfill，对于使用了 ES2015+ 语法的项目来说，为了兼容性，polyfill 是必要的存在；
- 业务基础库，业务的一些通用的基础代码，不属于框架，但大部分业务都会使用到；
- 业务代码，特点是具体业务自身的逻辑代码。


##### 缓存基础框架（可以使用浏览器缓存）
##### 使用动态polyfill
```
<script src="https://cdn.polyfill.io/v2/polyfill.js"><script/>
```

它会根据你的浏览器 UA 头，判断你是否支持某些特性，从而返回给你一个合适的 polyfill。对于最新的 Chrome 浏览器来说，不需要任何 polyfill，所以返回的内容为空。对于 iOS Safari 来说，需要 URL 对象的 polyfill，所以返回了对应的资源。

##### 使用 SplitChunksPlugin 自动拆分业务基础库

##### 使用tree shaking 减少业务代码
#### 三.首次内容渲染->可交互

