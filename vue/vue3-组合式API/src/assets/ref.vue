<script setup>
// ref接受简单类型或复杂类型,返回一个响应式对象
// 本质上在传入的数据外层包了一层对象,在借助reactive实现响应式
import {ref} from 'vue'
const count = ref(0)
console.log(count.value);//.value
</script>

<template>
    <div>{{ count }}</div>
    <!-- 在template不用.value -->
</template>