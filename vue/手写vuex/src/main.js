import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'

//vue 保持自身简单，其它工作交给生态中的插件
//mvvm 嫁接
//use

createApp(App).use(store).mount('#app')
