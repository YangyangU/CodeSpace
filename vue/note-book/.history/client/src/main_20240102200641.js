import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible' //根字体大小自动设置
import './assets/style/reset.css'
import { Button } from 'vant';
import 'vant/lib/index.css';



createApp(App).use(Button).mount('#app')

// 1. 引入你需要的组件
// 2. 引入组件样式
// 3. 注册你需要的组件

