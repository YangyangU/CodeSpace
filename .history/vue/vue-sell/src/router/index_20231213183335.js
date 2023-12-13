import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/goods',
    name: 'goods',
    component:()=>import('@views/goods')
  },
  {
    path:'/goods',
    name: 'goods',
    component:()=>import('@views/goods')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router