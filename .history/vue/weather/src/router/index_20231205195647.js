import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        //网页路径一般小写
        path:'/home',
        name: 'home',
    },
]

const router =createRouter({
    history: createWebHistory(),
    routes
})


export default router