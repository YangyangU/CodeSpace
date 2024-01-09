<script setup>
import { onMounted } from 'vue';


//beforeCreate 和 created 代码一律放在setup里面
const getList = () =>{
  setTimeout(()=>{
    console.log('getList');
  },2000)
}
//一进入页面的请求
getList()

//可多次使用，不冲突，按次序执行
onMounted(()=>{
  console.log('onMounted1');
})
onMounted(()=>{
  console.log('onMounted2');
})
</script>

<template>

</template>

<style scoped>

</style>
