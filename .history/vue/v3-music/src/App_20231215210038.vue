<script setup>
  import { onMounted } from 'vue';
  // import Menu from './components/layout/menu/Menu.vue';
  import Menu from '@/components/layout/menu/Menu.vue';
  import Header from '@/components/layout/header/Header.vue';
  import Discover from '@/views/discover/Discover.vue';
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
  
</template>



<style scoped>

</style>