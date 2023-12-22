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
  </div>
</template>

<style scoped>

</style>
