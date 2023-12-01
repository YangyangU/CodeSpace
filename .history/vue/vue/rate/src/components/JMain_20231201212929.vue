<template>
    <div>
        JMain
        <div v-for="user in users">
            <Item :user='user'/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Item from './Item.vue'
// 提供数据
// Model
let users = ref([])
setTimeout(() =>{
    users.value = [...users.value,'Yiko']
},2000)

fetch('https://ztj8kh.laf.run/get-list')
.then(res => res.json())
</script>

<style scoped>

</style>