import { createRouter, createWebHistory } from 'vue-router'

const routes = [

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
