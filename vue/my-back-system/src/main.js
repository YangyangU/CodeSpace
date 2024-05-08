import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import "./api/mock.js"
import {verify} from "./utils/jwt.js";

const app = createApp(App)
const pinia = createPinia()

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  const token = localStorage.getItem('token')
  
  if(!token && to.path !== '/login'){
    next('/login')
  }else if(token && to.path === '/login'){
    next('/main')
  }else{
    next() 
  }
})

app.use(pinia).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
