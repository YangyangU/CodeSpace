<template>
    <div>
        <TodoItem />
    </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
import { ref, computed} from 'vue'
// 组件可以使用的数据状态 ref props 父组件提供的
// computed 来源 ref,computed / vuex|pinia
</script>

<style scoped>

</style>