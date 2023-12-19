import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redriect:'/home'
  },
  {
    path:'/home',
    name: 'home',
    component:()=> import('@/views/home')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
