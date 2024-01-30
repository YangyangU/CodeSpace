<template>
    <div>
        about
        <keep-alive>
            <component :is="Hello"></component>
        </keep-alive>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Hello from '../components/Hello.vue'

onMounted(()=>{
    console.log('about')
})

// import {onBeforeRouteUpdate,onBeforeRouteLeave} from 'vue-router'

// onBeforeRouteLeave((to,from,next)=>{
//     console.log(to,from);
//     window.confirm('你确定要离开？')
//     next()
// })
</script>

<style lang="css" scoped>

</style>