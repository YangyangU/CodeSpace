import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// 1. 引入你需要的组件
import { Button, Form, Field, CellGroup } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)
app.use(Button).use(Form).use(CellGroup).use(Field)
app.use(router).mount('#app')
