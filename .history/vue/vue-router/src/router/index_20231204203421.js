import { createWebHistory,createRouter } from 'vue-router'
const routes = [

]

const router = createRouter({
    history: createWebHistory(), //路由history模式 ，还有一个hash模式
    routes
})

export default router  //有什么用？