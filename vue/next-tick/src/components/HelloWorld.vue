<template>
  <div>
    <p ref="refP">消息: {{ message }}</p>
    <button @click="updateMsg">修改消息</button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, nextTick, onMounted } from 'vue';
import {myNextTick} from './next-tick.js'

const message = ref('初始消息');

const refP = ref(null)//获取DOM结构
const updateMsg = () => {
  console.log(message.value, '同步任务');
  setTimeout(() => {
    console.log(message.value, '异步宏任务——setTimeout'); // <p>...</p>
  }, 0)

  myNextTick(() => {//对比可知是异步
    console.log(message.value, '异步微任务——myNextTick'); // <p>...</p>
  })
  message.value = '修改后的消息';
}
// console.log(refP.value);//null //无法将延迟的DOM 节点解析为有效的节点。



// onBeforeMount(() => {
//   console.log(refP.value);//null
// })

// onMounted(()=>{
//   console.log(refP.value,'onMounted');
// })



// console.log(refP.value, '这是同步');//null
</script>

<style lang="css" scoped></style>