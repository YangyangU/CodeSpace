<template>
    <section>
        <div class="header">
            <h1>todos</h1>
            <!-- 页面上有表单，让光标自动聚焦，不用再点一下 -->
            <input class="new-todo"
            autofocus
            autocomplete="off"
            placeholder="What needs to be done"
            @keyup.enter="addTodo"
        >
        </div>
        <TodoItem />
    </section>
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

const addTodo = (e)=>{
    const text = e.target.value;
    if(text.trim()){
        //vuex
        todos.value.push({text,done:false});
    }
}
</script>

<style scoped>

</style>