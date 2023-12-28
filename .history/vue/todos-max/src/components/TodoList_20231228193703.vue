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
// 数据混在一起了
const visibility = ref('all');
const Todos = ref([]);
const allChecked = ;
const filterTodos,
const remaining
</script>

<style scoped>

</style>