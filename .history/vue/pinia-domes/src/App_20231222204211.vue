<script setup>
//以组件为开发单元
import { ref } from 'vue';
// const todos = ref([
//   {text:'haha'}
// ])
// todosd 到来 vue mapState pinia
import {useStore}
</script>

<template>
  <div>
    <TodoList/>
    <Item/>
    <Bang :title="作者帮"/>
  </div>
</template>

<style scoped>

</style>
