<template>
    <ul>
        <li v-for="todo in todos">
            {{ todo.txt }}
        </li>
    </ul>
    <ul>
        <li v-for="todo in todos">
            {{ todo.txt }}
        </li>
    </ul>
</template>

<script setup>
    const props = defineProps({
        todos:{
            type:Array
        }
    })
</script>

<style scoped>

</style>