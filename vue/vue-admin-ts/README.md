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
      - mouted <from>