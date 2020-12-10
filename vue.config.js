module.exports = {
  pages: {
    index: {
      title: 'Alex Gearing | Hello',
      entry: 'src/main.js',
    },
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/utils/index.scss";',
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { cleanupIDs: false },
            { collapseGroups: false },
          ],
        },
      })
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })
  },
}
