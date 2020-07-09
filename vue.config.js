module.exports = {
  publicPath: "./",
  lintOnSave: false,
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      "/useclient": {
        target: "https://p.3.cn/prices/mgets", //这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          "^/useclient": "", //请求的时候使用这个useclient就可以
        },
      },
      "/useclient2": {
        target: "https://p.3.cn/prices/mgets", //这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true, //允许跨域
        pathRewrite: {
          "^/useclient2": "", //请求的时候使用这个useclient2就可以
        },
      },
    },
  },
};
