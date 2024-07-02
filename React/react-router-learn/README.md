npm i 
npm i react-router-dom
npm run start

## 别名路径
npm i -D @craco/craco

"scripts": {
-  "start": "react-scripts start"
+  "start": "craco start"
-  "build": "react-scripts build"
+  "build": "craco build"
-  "test": "react-scripts test"
+  "test": "craco test"
}

1. 配置webpack.config.js
2. 配置package.json

## 懒加载

1. lazy函数


## 包体积可视化

npm i source-map-explorer

"analyze": "source-map-explorer build/static/js/main.*",


## CDN优化
内容分发网络,由离最近的服务器资源内容传递给用户

- 哪些内容可以放在CDN?
体积较大的非业务JS文件,react react-dom
不需要经常变动的文件

- 步骤
1. 排除
2. 引入