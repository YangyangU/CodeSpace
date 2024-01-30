<template>
  <div>
    <p ref="refP">消息: {{ message }}</p>
    <button @click="updateMsg">修改消息</button>
  </div>
</template>

<script setup>
import { ref,onBeforeMount, nextTick, onMounted } from 'vue';

const message = ref('初始消息');

const refP = ref(null)//获取DOM结构

// console.log(refP.value);//null //无法将延迟的DOM 节点解析为有效的节点。

setTimeout(() => {
  // console.log(refP.value,'setTimeout'); // <p>...</p>
}, 1000)

onBeforeMount(() => {
  // console.log(refP.value);//null
})

const updateMsg=()=> {
  message.value = '修改后的消息';
  // console.log(refP.value,'updateMsg');
}

onMounted(()=>{
  console.log(refP.value,'onMounted');
})

nextTick(() => {//对比可知是异步
  console.log(refP.value,'nextTick'); // <p>...</p>
})

// console.log(refP.value,'这是同步');//null
</script>

<style lang="css" scoped>

</style>