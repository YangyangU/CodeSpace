import { createWebHistory,createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {//一个页面就是一个花括号
        path: '/home',//网页上的路径
        componebt: Home,
    },
    {
        path: '/about',
        componebt: About,
    }
]

const router = createRouter({
    history: createWebHistory(), //路由history模式 ，还有一个hash模式
    routes
})

export default router  //有什么用？