<script setup>

// reactive 接受一个对象类型数据,返回一个响应式对象
import { reactive } from 'vue'

const state = reactive({
    count:100
})
</script>

<template>
    <div>
        {{ state.count }}
    </div>
</template>