# 小程序业务架构

- App和Page的概念
  App 全局，pages共享的
  app.js 共享 globalData
  app.wxss 样式
  app.json 应用的配置

- globalData 如何 来到page中的
  - const app = getApp()
    应用对象
  - data 初始化占位
  {
    data:{
      user:{} // 空的
    }
  }

- 生命周期
  数字来自于后端接口
  onLoad wxml + wxss 显示了
  这是请求数据的最佳时机
  - this.setData({
  user:真正的值
  })
  - 页面会热更新 重新绘制{{}}这部分


- 循环输出的概念 
  - 模版在{{直出}}外，数据列表输出的常态
  - block 只承载指令 wx:for
    不会出现在文档流中
  - item 默认
    item.image

- css 架构
  Dry 原则 Don't repeat yourself !
  css 业务拆分  一个元素多个类名
  section hero white
  - app.wxss 全局样式
    - 公用的样式
    - 模块化
  - page.wxss 页面业务样式
  - 页面中比较独特的模块，独立css 文件
  - 通用组件也可以
    button card 都是组件
  - 通用的业务也可以
    .hero>.content>.header+.sub_header...
    维护花的时间更多，甚至不可维护
- 开发简单就是
  - 准备好数据
  - 写页面