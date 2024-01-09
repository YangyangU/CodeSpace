<script setup>
//子组件
// setuo无法直接配置props
const props = defineProps({
    car:String
})
console.log(props.car);
</script>

<template>
    <div class="son">我是子组件{{ car }}</div>
</template>

<style scoped>
.son{
    border: 1px solid #000;
    padding: 30px;
}
</style>
