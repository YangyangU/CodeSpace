<template>
    <ul>
        <li v-for="todo in todos">
            {{ todo.text }}
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