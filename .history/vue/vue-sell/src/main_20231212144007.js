import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/common/style/reset.css'//引入reset.css
// 放在main.js内的内容最终都要被编译

createApp(App).use(router).mount('#app')
