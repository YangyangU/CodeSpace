<!-- About.vue -->

<template>
    <div>
        <h2>这是About页面</h2>
        <p>学号：{{ route.params.id }}</p>
        <p>姓名：{{ route.params.name }}</p>
        <p>年龄：{{ route.params.age }}</p>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router' 

const route = useRoute()

</script>

<style lang="css" scoped>

</style>