<template>
    <!-- 给项目带来图标 开源项目 -->
    <!-- 声明图标组件 -->
    <Component :is="icon" :theme="theme" :size="size" :spin="spin" 
    :fill="fill" :strokeLinecap="strokeLinecap"
    :strokeLinejoin="strokeLinejoin" :strokeWidth="strokeWidth">
    </Component>
</template>

<script setup>
// 私有数据 pros
// 定义父组件穿过来的参数
// vue组件的一件声明方式，本来是有各种图标，Component + is ="" 入侵式的组件声明方式
import { defineProps } from 'vue';
defineProps(['icon', 'theme', 'size', 'spin', 'fill', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth'])
</script>

<style scoped>

</style>
