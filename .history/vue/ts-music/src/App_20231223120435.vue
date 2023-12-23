<script setup lang="ts">
import { onMounted,ref } from 'vue';
import {useBanner} from './api/index';
import type { Banner } from './models/banner';


let banners = ref<Banner[]>([]) //vue 的响应式
onMounted(async ()=>{
  banners.value = await useBanner()
  console.log(banners.value);
  
})
</script>

<template>
  <ul>
    <li v-for="banner in banners" :key="targetId">
      <img src="banner.">{{ banner }}
    </li>
  </ul>
</template>

<style scoped>

</style>
