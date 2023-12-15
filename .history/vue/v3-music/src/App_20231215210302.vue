<script setup>
  import { onMounted } from 'vue';
  
  import {getBanner} from '@/utils/api'
  import {getSearchSuggest} from '@/utils/api'

  onMounted(async () =>{
    const data = await getBanner();
    console.log(data);
    const data2 = await getSearchSuggest('海阔天空');
    console.log(data2);
  })
</script>

<template>
  <router-view></router-view>
</template>



<style scoped>

</style>