<template>
    <div>

    </div>
</template>

<script setup>
const props = defineProps({
    car:String,
    money:Number,
})

const emit = defineEmits(['changeMoney'])
const buy = () =>{
    emit('changeMoney',5);
}
</script>

<style scoped>

</style>
父组件向子组件传值
1.父组件添加属性
2.子组件通过defineProps()接收

子组件向父组件传值
1.子组件触发emit事件
2.父组件通过@监听
