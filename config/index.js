'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './static/bishe-vue-new', // r_原来是static
    assetsPublicPath: './', // r_原来是./
    productionSourceMap: false,    // r_原来是true
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8081,
    autoOpenBrowser: true,
    assetsSubDirectory: './adsfadsf/static', // r_原来是 static
    assetsPublicPath: './ddddd',     // r_原来是 ./
    // proxyTable: {}, // 这是原来的
    proxyTable: {
      '/authentication': {    // 获取身份
        target: 'https://developer.api.autodesk.com',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/oss': {
        target: 'https://developer.api.autodesk.com',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/modelderivative': {
        target: 'https://developer.api.autodesk.com',
        changeOrigin: true,
        pathRewrite: {}
      },
      '/museum-api': {
        target: 'http://115.29.140.80:8080', //设置调用接口域名和端口号别忘了加http
        changeOrigin: true,
        pathRewrite: {}
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
