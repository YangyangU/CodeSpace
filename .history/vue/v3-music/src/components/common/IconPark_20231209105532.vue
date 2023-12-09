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
import { defineProps } from 'vue';
  defineProps<{
    icon: Icon,
    theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color',
    size?: number | string,
    spin?: boolean,
    fill?: string,
    strokeLinecap?: 'butt' | 'round' | 'square',
    strokeLinejoin?: 'miter' | 'round' | 'bevel',
    strokeWidth?: number
  }>()
</script>

<style scoped>

</style>
