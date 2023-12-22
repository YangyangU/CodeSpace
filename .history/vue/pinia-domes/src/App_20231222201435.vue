<script setup>
//以组件
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
