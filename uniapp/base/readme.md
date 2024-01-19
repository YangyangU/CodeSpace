# 各文件的职能
main.js：
作用：入口文件，初始化 Vue 实例，并配置一些全局设置。
通常用于注册全局组件、配置全局样式、引入插件等。

static 目录：
作用：存放静态资源。
包括图片、字体等静态文件，可以通过相对路径引用。

App.vue：
作用：应用的根组件。
包含应用的整体结构和布局，以及通过路由切换的页面内容。

pages 目录：
作用：存放各个页面的组件。
Uni-app 中的页面通过组件来实现，每个页面对应一个组件，放在 pages 目录下。

manifest.json：
作用：配置应用的一些基本信息，如应用名称、图标、权限等。
包含应用在不同平台的配置信息。

uni.scss 或 uni.css：
作用：全局样式文件。
可以定义整个应用的通用样式，会被全局引用。

pages.json：
作用：配置页面路由、导航栏样式等。
定义了应用的页面结构和导航栏的样式。

uni_modules 目录：
作用：存放 uni-app 插件。
Uni-app 支持通过插件扩展功能，这些插件通常存放在 uni_modules 目录下。
这些文件和目录组合起来构成了一个完整的 Uni-app 项目，每个文件都有其特定的作用，用于实现不同方面的功能。

uni.promisify.adaptor.js 文件的作用通常是用于适配 Uni-app 中的异步API，将其转换为 Promise 形式，以便更方便地使用 Promise 的语法进行异步操作。

# vue生命周期
- vue 自代的生命周期在uniqpp中都能使用

# 页面生命周期
- uniqpp 提供了页面生命周期，比如上拉加载，下来刷新，页面渲染完成...钩子函数

# 应用生命周期
- 整个app应用的生命周期，只能在App.vue 里面使用

# 全局变量
1. Vue.prototype.name = '测试名称'
2. 在App.vue设置
```javascript
globalData:{
	name: '全局的名称'
},
const name = getApp().globalData.name
```
# 跳路由
1. 
```javascript
uni.navigateTo({
	url:'/pages/about/about'
})
```
2. 
```javascript
<navigator url="/pages/about/about">去关于页</navigator>
```

# 接口请求
```javascript
const reqTask = uni.request({
	url:'https://mock.mengxuegu.com/mock/65a91554c4cd67421b34c8c3/movie/movieList',
	method:'GET',
	success: (res) => {
		console.log(res);
	}	
})//.then(res=>{//跟success一样
	// console.log(res);
// })
// reqTask.abort()//请求终止
```

- 假接口
easy mock 内置mockjs 可以快速造假数据
mock.js	规则


- rpx

- iconfont