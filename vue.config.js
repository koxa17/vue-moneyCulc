module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-moneyCalc/' : '/',
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
    },
  }
};
