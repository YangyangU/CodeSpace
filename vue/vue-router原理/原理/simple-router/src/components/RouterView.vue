<template>
    <!-- vue提供的子组件写法 -->
    <component :is="Hello"></component>
</template>

<script setup>
import { computed } from 'vue';
import {useRouter} from '../myRouter'

const router = useRouter()

console.log(router);

const component = computed(()=>{
    //如果当前url是'/'，就返回Home.vue

})
</script>