- yarn create vite hooks --template vue 

- yarn create vite vite --template vue

# 路由的钩子函数
- 全局守卫
1. router.beforeEach
2. router.beforeResolve
3. router.afterEach

- 独享守卫
直接在路由配置上定义，如beforeEnter，只对这一个跳转生效
- 组件内的守卫
你确定要离开吗 onBeforeRouteLeave
从一个页面跳到另一个页面，但用的是相同的组件 onBeforeRouteUpdate

# keep-alive
（子组件的onMounted，没有必要每次跳转都加载）
包裹需要缓存的组件
```js
<router-view v-slot="{ Component }">
    <keep-alive :include="['Home']">
        <component :is="Component"/>
    </keep-alive>
</router-view>
```
1. onActivated
当被缓存的组件再次生效时触发

2. onDeactivated
当组件被缓存起来的时候触发
