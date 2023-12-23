<script setup lang="ts">
import { onMounted } from 'vue';
import {useBanner} from './api/index';

let banners = ref([])
onMounted(()=>{
  useBanner()
})
</script>

<template>

</template>

<style scoped>

</style>
