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
      enableInSFC: true
    }
  }
}
