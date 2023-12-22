<template>
    <ul>
        <li v-for="todo in todos">
            {{ todo.txt }}
        </li>
    </ul>
    <button type="button" @click="addTodo">添加</button>
</template>

<script setup>
    const props = defineProps({
        todos:{
            type:Array
        },
        addTodo:{
            
        }
    })
</script>

<style scoped>

</style>