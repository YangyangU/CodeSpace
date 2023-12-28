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
// all/active/completed/ 不同的node
    // todo
    const filters = {
        all:todos=> todos,
        active:todos=> todos.filters(todo =>!todo.done),
        computed:todos=> todos.filters(todo =>todo.done),
    }
const visibility = ref('all');  //change
const todos = ref([]);  //容器
const allChecked = computed(()=>Todos.value.every(todo=>todo.done)); //computed todos every
const filterTodos = computed(()=>),  //computed todos + visibility
const remaining // computed
</script>

<style scoped>

</style>