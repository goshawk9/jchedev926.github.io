module.exports = {
  publicPath: '/portfolio/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
        `,
      },
    },
  },
}
