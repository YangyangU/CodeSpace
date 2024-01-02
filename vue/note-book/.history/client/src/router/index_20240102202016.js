import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/login',
        name: 'login',
        component:()=>import{'../router/Login.vue'}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router