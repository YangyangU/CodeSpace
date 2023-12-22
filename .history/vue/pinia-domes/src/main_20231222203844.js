import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)


app
    // .use(router)    // SPA
    .use(createPinia()) //统一管理数据 会计
    .mount('#app')  //UI组件
