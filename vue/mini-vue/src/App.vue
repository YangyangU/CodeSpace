<template>
  <div>
    <p>{{ state.count }}</p>
    <button @click="() => state.count++">add</button>
  </div>
</template>

<script setup>
import { computed, reactive, watch, effect } from 'vue';
//不从vue引入，自己敲____二次渲染不刷新
// import { reactive } from './reactivity/reactive.js'
const state = reactive({
  count: 1,
})

const state2 = reactive(state)//小可爱，纯纯浪费，没意义，能执行

computed(()=>{
  console.log('computed')
})

watch(
  ()=>state.count,
  ()=>console.log('watch')
)

effect(()=>{//类似于生命周期,一开始就会执行,源码里用的
  console.log('effect')
},{lazy: true})//加了lazy，不会立即执行


</script>

<style lang="css" scoped>
</style>