<template>
    <div>
        JMain
        <Item v-for="user in users"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Item from './Item.vue'
// 提供数据

let users = ref(['阳阳羊','徐阳阳'])

</script>

<style scoped>

</style>