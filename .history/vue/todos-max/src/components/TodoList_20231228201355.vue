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
const todos = ref([
    {
        id:1,
        text:'吃饭',
        done:true,
    },
    {
        id:2,
        text:'喝酒',
        done:false,
    },
    {
        id:3,
        text:'元梦之星',
        done:false,
    }
]);  //容器
const allChecked = computed(()=>todos.value.every(todo=>todo.done)); //computed todos every
const filterTodos = computed(()=>filters[visibility.value](todos.value));  //computed todos + visibility
const remaining = '' // computed
</script>

<style scoped>

</style>