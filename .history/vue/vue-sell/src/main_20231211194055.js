import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/common/style/reset.css'//引入reset.css

createApp(App).use(router).mount('#app')
