import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus' // 引入组件库
import 'element-plus/dist/index.css' // 引入组件的样式


createApp(App).use(router).use(ElementPlus).mount('#app')
