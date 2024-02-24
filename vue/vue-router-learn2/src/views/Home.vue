<!-- Home.vue -->

<template>
    <div>
        <h2>这是Home页面</h2>
        
        {{data.name}}
        <button @click="check">详情</button>
        <!-- <router-link to="/home/child">child</router-link> -->
    </div>
    <router-view></router-view>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const data = {
    id:'001',
    name: '阳阳',
    age:'20',
}
const check = ()=>{
    router.push({
        name: 'about',
        params: data
    })
}
</script>

<style scoped>

</style>