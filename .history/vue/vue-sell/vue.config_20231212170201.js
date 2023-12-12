const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:{
      '/api':{
        target:'http://ustbhuangyi.com/sell/',
        changeOringin:true,
        pathRewrite:{
          '^/api':'/api'//用/api代理这个地址
        }
      }
    }
  },
})
