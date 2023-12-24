<template>
    <div>
        <ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic">
    </li>
  </ul>

    </div>
</template>

<script>
import {useBannerStore } from '../store/banner';
import { onMounted,toRefs } from 'vue';
const {banners} = toRefs(useBannerStore())
const {getBanners} = useBannerStore()
    export default {
        
    }
</script>

<style scoped>

</style>