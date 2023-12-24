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
import {usePersonalizedStore} from './store/personalized';


import {useBannerStore } from '../store/banner';
import { onMounted,toRefs } from 'vue';
const {banners} = toRefs(useBannerStore())

const {getBanners} = useBannerStore()

const {personalizedMv} = toRefs(usePersonalizedStore())
const {getPersonalized} = usePersonalizedStore()

onMounted(async ()=>{
  await getBanners()
  await getPersonalized()
})

import Banner from './components/Banner.vue';
</script>

<template>
  <Banner />
  <Personalized />
  <!-- <ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic">
    </li>
  </ul> -->
  <!-- <ul>
    <li v-for="personalized in personalizedMv" :key="personalized.id">
      <img :src="personalized.picUrl">
    </li>
  </ul> -->
</template>

<style scoped>

</style>
