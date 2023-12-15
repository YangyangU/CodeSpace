//完成配置
import { createRouter,createWebHashHistory } from 'vue-router';
// PC端考虑兼容性 hs兼容性好
const router = createRouter({
    history:createWebHashHistory(),
    router:[
        {
            path:'/',
            name:'home',
            component:()=> import('@/views/Root.vue')
        }
]
})

export default router