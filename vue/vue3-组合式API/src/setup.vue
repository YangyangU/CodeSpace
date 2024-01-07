<template>
    <div>

    </div>
</template>

<!-- 原始写法 -->
<script>
export default {
    setup(){
        const message = 'adhwuhai'
        return {
            message
        }
    }
}
</script>

<!-- 语法糖写法 -->
<script setup>
    const message = 'adhwuhai'
</script>

<style scoped>

</style>