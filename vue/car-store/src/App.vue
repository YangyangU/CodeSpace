<template>
  <ul class="list" id="list">
    <li v-for="item in list" :key="item.index">{{ item }}</li>
  </ul>
</template>


<script setup>
import { ref } from 'vue';
const list = ref(['html', 'css', 'js'])
</script>

<style lang="less" scoped></style>
