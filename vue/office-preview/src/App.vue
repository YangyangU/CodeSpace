<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {onMounted, ref} from 'vue'
const url = ref('')
onMounted(()=>{
  url.value = './1.pptx'
})
</script>

<template>
  <HelloWorld :url="url"/>
</template>

<style scoped>

</style>
