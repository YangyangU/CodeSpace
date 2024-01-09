<script setup>
//父传子
//1.给子组件，添加属性的方式传值
// 2.在子组件，通过props接收
import Son from './components/son.vue'
</script>

<template>
<div>
  <h3>父组件</h3>
  <Son car="宝马车"></Son>
</div>
</template>

<style scoped>

</style>
