module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/datav' : '/',
  css: {
    loaderOptions: {
      /* 处理全局 scss 变量 */
      scss: {
        prependData: `@import "~@/scss/variables.scss";`,
      },
    },
  },
  configureWebpack: {
    externals: {
      // vue: 'Vue',
    },
  },
};
