<template>
    <li class="todo" :class="{completed:todo.done}">
        <div class="view">
            <label for="" v-text="todo.text"></label>
        </div>
    </li>
</template>

<script setup>
defineProps({
    todo:Object
})
</script>

<style scoped>

</style>