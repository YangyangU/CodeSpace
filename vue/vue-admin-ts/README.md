- 何为Typescript
   JavaScript的超集

- 如何使用ts
   - 像js一样来写

npm i -D unplugin-auto-import unplugin-vue-components

npm i element-plus


# 项目亮点
- 使用了ElementPlus
   - 登录注册页 表单
      - 表单的目的是收集数据，:model="" 双向绑定
         每个el-input v-model=".username"
      - 表单的校验配置一下就好
      - 用户体验做好
      - @keyup.enter事件修饰符
   - ref 属性 DOM 标记
      - const login = ref(); //null
      - mouted <from ref="login">
   - 表单提交
      - validate

- 为什么element-plus 图标要搞这么复杂？
   - 按需加载
      图标库有点大，如果用户使用别的图标，省空间
   - 其他的选择
   - 单独安装的图标库
   - 项目中使用element-plus的图标库
      app.component() 全局挂载一下 优化 用到哪几个就挂载哪几个


## ts
- 写js就好，再做点加法
- 最关心的数据
   - ref
   - reactive
   - props
   - store
- 函数的参数

## vue 考题
- <component :is="comName"/>
   循环或动态输出组件
- <template />
   slot
   不会显示 到页面上 接受指令 不添加指令

## 项目亮点
   - 带有角色校验的菜单
      - 菜单
         el-menu>el-sub>el-menu-item
      - 当前选中的菜单
         :default-active="route.path"
      - 哪些菜单可以看到？
         指令？自定义指令
         store -> permiss roleList user includes ?
         添加一个数据项 key 任何组件都可以调用
         setKeys action
         localStorage  读取
   - 自定义指令
      app.directives(name)
      v-name
      mounted(el,binding)
      el['hidden'] = true
      el.style.opacity = 0 v-show

## 项目难点
   - 多组件状态的共享和设计
      - vuex 和 pinia
         用pinia  vuex modules 很灵活，加一个defineStore ，没有vuex的树状约束，执行一下函数就能拿到hook 语法简洁
         学vuex 设计模式 ，state muation action getter 安全
      - 学习过一些项目 github 开源 vue-music
      - 因为当我在多个组件，特别是兄弟或跨页面级别组件
         有共享状态需求的时候，我封装了了一个store函数
         原来是用 ref + props + emits