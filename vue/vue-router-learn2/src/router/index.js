import { createRouter,createWebHistory } from "vue-router";

// 定义路由配置数组，包含的每个对象代表一个路由规则
const routes = [
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),// 组件懒加载
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
    }
]

// 创建路由器实例，并设置模式为WebHistory
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router