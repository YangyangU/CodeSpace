# 项目初始化
创建前后端项目

- client
yarn create vite client --template vue

yarn add vue-router@4

yarn add vant

yarn add axios、

- server
初始化后端项目
npm init -y

npm i koa

解决跨域
npm i koa2-cors 

接收post请求的参数
npm i koa-bodyparser 

后端路由
npm i koa-router  

# token (令牌)
- cookies 是浏览器的内存空间，但是受后端的掌控，后端将登录令牌保存在cookies中，所有被保存在cookies中的数据，都会在http请求时自动被携带在请求头中

- JWT 由 头部 负载 签名 组成

生成token sign()
 npm i jsonwebtoken 
 也提供校检功能verify()
 

前端登录后，后端校验账号密码成功后，靠jwt来生成生成一个token，并将该token返回给前端，前端在接收到token后，将token保存在浏览器本地缓存中，封装了axios，在请求拦截中为每一次请求中添加Authorization字段，之后的接口请求，后端获取到请求头中的token并进行校验，如果token合法则返回数据，否则返回401状态码，告诉前端token失效，重定向到登录页。