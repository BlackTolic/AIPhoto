// vue.config.js，如没有此文件则手动创建
module.exports = {
  transpileDependencies: ["uview-ui"],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
