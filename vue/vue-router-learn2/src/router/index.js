import { createRouter,createWebHistory,createMemoryHistory,createWebHashHistory } from "vue-router";
const routes = [
    {
        path: '/home',
        component: () => import('../views/Home.vue'),
        children:[
            {
                path:'child',
                component: () => import('../views/Child.vue'),
            }
        ]
    },
    {
        path: '/about/:id/:name/:age',
        name: 'about',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(), //使用HTML5模式
    // history: createMemoryHistory(), //使用Memory模式
    // history: createWebHashHistory(), //使用Hash模式
    routes
})

export default router