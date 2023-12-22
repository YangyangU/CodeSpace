<script setup>
//以组件为开发单元
import TodoList from './components/TodoList.vue';
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
    <TodoList :todos="todoStore.todos" 
    :add="todoStore.addTodo"/>
    <Item/>
    <Bang :title="作者榜" :items="authors"/>
  </div>
</template>

<style scoped>

</style>
