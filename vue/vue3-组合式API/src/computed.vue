<template>
    <div>
        原始数据:{{list}}
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'
const list = ref([1,2,3,4,5])

const computedList = computed(()=>{
    return list.value.filter(item => item>2)
})
</script>

<style scoped>

</style>