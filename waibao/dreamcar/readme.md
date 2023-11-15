# 小程序业务架构

- App和Page的概念
  App 全局，pages共享的
  app.js 共享 globalData
  app.wxss 样式
  app.json 应用的配置

- globalData 如何 来到page中的
  - const app = getApp()
  - 