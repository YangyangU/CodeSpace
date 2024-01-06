import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './assets/css/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/css/color-dark.css'
import { usePermissStore } from './store/permiss'

const app = createApp(App)

app
    .use(createPinia())
    .use(router)


//{a:1,b:2}[[a,1][b,2]]
for (const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component)//给app挂在一个全局组件
}

const permiss = usePermissStore()
//全局指令
app.directive('permiss',{
    mounted(el,binding){
        if(!permiss.key.includes(String(binding.value))){
            el['hidden'] = true
        }
    }
})

app.mount('#app')
