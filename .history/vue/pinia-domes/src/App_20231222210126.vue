<script setup>
//以组件为开发单元
import { ref } from 'vue';
// const todos = ref([
//   {text:'haha'}
// ])
// todosd 到来 vue mapState pinia

import {useTodoStore} from './store/todo.js'
const todoStore = useTodoStore()
console.log(todoStore.todos);
</script>

<template>
  <div>
    <TodoList :todos=""/>
    <Item/>
    <Bang :title="作者榜" :items="authors"/>
  </div>
</template>

<style scoped>

</style>
