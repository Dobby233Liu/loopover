module.exports = {
  publicPath: '.',

  pwa: {
    name: process.env.VUE_APP_NAME,
    themeColor: "#ffffff",
    appleMobileWebAppCapable: true,
    manifestOptions: {
      background_color: "#ffffff"
    }
  },

  configureWebpack: {
    externals: {
      moment: "moment"
    }
  },

  chainWebpack(config) {
    if (process.env.MODE == "testing") {
      config.plugin("copy").tap(([patterns]) => [["public.testing", ...patterns]])
    }

    config.plugin("html").tap(args => {
      const minifyOptions = args[0].minify
      if (minifyOptions instanceof Object) {
        minifyOptions.minifyJS = true
      }
      return args
    })
  },

  transpileDependencies: ["idb"],
  productionSourceMap: false,
  runtimeCompiler: true
}