<script setup lang="ts">
// import { onMounted,ref } from 'vue';
// import {useBanner} from './api/index';
// import type { Banner } from './models/banner';

// let banners = ref<Banner[]>([]) //vue 的响应式
// onMounted(async ()=>{
//   banners.value = await useBanner()
//   console.log(banners.value);
// })


// 换种写法

import { onMounted,toRefs } from 'vue';
import {useBannerStore } from './store/banner';
import {usePersonalizedStore} from './store/personalized';

const {banners} = toRefs(useBannerStore())
const {getBanners} = useBannerStore()

const {personalizedMv} = toRefs(usePersonalizedStore())
const {getPersonalized} = usePersonalizedStore()

onMounted(async ()=>{
  await getBanners()
  await getPersonalized()
})

</script>

<template>
  <Banner />
  <!-- <ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic">
    </li>
  </ul>
  <ul> -->
    <li v-for="personalized in personalizedMv" :key="personalized.id">
      <img :src="personalized.picUrl">
    </li>
  </ul>
</template>

<style scoped>

</style>
