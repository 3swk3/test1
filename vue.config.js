const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8081, // 启动端口号
    // open:true  // 启动后是否自动打开网页
  }
})
