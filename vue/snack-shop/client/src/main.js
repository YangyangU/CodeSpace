import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible' //自动设置跟字体大小
import './assets/style/reset.css'//重置样式
import { Button, Form, Field, CellGroup,Search,Swipe, SwipeItem } from 'vant'; //按需引入
import 'vant/lib/index.css';//vant样式
import router from './router'

const app = createApp(App);

app.use(router)
app.use(Button).use(Form).use(Field).use(CellGroup).use(Search).use(Swipe).use(SwipeItem);//注册
app.mount('#app')
