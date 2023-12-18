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
        }
    //   data(){
    //     return {
    //       lists:['徐阳阳是大帅哥', '江雅欣是大美女'],
    //       message:''
    //     }
    //   },
    //   methods:{
    //     submit(){
    //       if (this.message) {
    //         this.lists.push(this.message)
    //         this.message = ''
    //       }
    //     }
    //   }
    }
  </script>
  
  <style scoped>
  
  </style>
  