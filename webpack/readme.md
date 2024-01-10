# webpack
    - 有无webpack对比
    - type="module"模块化
    - npm i webpack webpack-cli -D -g
        将main.js打包成chunk-[].js 
        如何在index.html生效
    - loader 和 plugin
    loader 用于转换某些类型的模块，而plugin则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
    - npm i html-webpack-plugin -D HTML 文件的创建插件
    读css
    - npm i css-loader style-loader -D
    用于提取CSS的插件，它可以将CSS样式表从JavaScript文件中提取出来，以独立的CSS文件形式输出。
    - npm i mini-css-extract-plugin -D
    把js降级,让老板浏览器读懂
    - npm i @babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime -D

    让webpack读懂vue
    - npm i vue
    - npm i vue-template-compiler vue-loader @vue/babel-preset-jsx -D
- gulp

- grunt

- rollup

- vite