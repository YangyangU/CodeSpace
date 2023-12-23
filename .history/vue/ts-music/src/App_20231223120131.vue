<script setup lang="ts">
import { onMounted,ref } from 'vue';
import {useBanner} from './api/index';
import type { Banner } from './models/banner';


let banners = ref<>([])
onMounted(async ()=>{
  banners.value = await useBanner()
})
</script>

<template>

</template>

<style scoped>

</style>
