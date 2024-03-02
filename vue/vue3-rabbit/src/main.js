import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')

//定义全局指令

app.directive('img-lazy',{
    mounted(el,binding){
        //el:指令绑定的元素 img
        //binding:binding.value 指令等号后面表达式的值 url
        console.log(el,binding.value);
    }
})
