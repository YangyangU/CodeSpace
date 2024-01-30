<template>
    <div>
        home
        <keep-alive>
            <component :is="Hello"></component>
        </keep-alive>
    </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted } from 'vue';
import Hello from '../components/Hello.vue'

onMounted(()=>{
    console.log('onMounted')
})

onActivated(()=>{//当被缓存的组件再次生效时触发
    console.log('onActivated');
})
onDeactivated(()=>{//当组件被缓存起来的时候触发
    console.log('onDeactivated');
})
</script>

<style lang="css" scoped>

</style>