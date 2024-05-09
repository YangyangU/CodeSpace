<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useStore } from './store';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()

store.addRouter(router)
// 刷新页面时，重新获取路由列表
router.replace('/')
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
</style>