<script setup>
//以组件为开发单元
import { ref } from 'vue';
const todos = ref([
  {text:'haha'}
])
</script>

<template>
  <div>
    <TodoList/>
    <Item/>
    <Bang/>
  </div>
</template>

<style scoped>

</style>
