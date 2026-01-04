const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /**
   * 子路径部署核心
   */
  publicPath: '/subconvert/',

  /**
   * 构建输出
   */
  outputDir: 'dist',
  assetsDir: '',

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  chainWebpack: config => {
    // 保留原 svg 规则
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
