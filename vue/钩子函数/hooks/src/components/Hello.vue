<template>
    <div>
        hello
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    console.log('hello')//子组件的onMounted，没有必要每次跳转都加载，就要用到keep-alive
})
</script>

<style lang="css" scoped>

</style>