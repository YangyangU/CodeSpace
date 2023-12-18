<template>
    <div>
        <Head />
        <List />
      <!-- <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确认</button>
      </div> -->
      <!-- 想单独成为组件 -->
      <!-- <div class="body">
        <ul>
          <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
        </ul>
      </div> -->
    </div>
  </template>
  
  <script>
import List from '@/components/body3/List.vue';
import Head from '@/components/body3/Head.vue';

    export default {
        components:{
            List,
            Head
        },
    }
  </script>
  
  <style scoped>
  
  </style>
  