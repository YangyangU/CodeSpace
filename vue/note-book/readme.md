# client
1. 移动端适配   yarn add amfe-flexible
2. 常见标签样式初始化   reset.css
3. vant UI
4. axios 封装 请求拦截 响应拦截

# server
1. navicat连接mysql
2. navicat创建notebook数据库
3. 在notebook上右键 > 运行sql文件
4. 配置了router接口 > routes
5. 创建了mysql的配置文件 > config  
    - npm init -y
    - npm i @koa/router
    - npm i koa
    - npm i koa-bodyparser 让koa能够解析post参数
6. 做mysql的连接 > controllers      npm i mysql  换成 mysql2
7. 验证匹配账号密码

# 跨域
- 浏览器的同源策略
https://127.0.0.1:3000/login
- https 协议
- 127.0.0.1 域名
- 3000 端口

这三者全部相同视为同源

解决：后端在响应体设置不用同源策略

1. cors

yarn add @vueup/vue-quill@latest 富文本编辑器

