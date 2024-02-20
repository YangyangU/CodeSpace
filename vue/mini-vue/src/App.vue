<template>
  <div>
    <p>{{ state.count }}</p>
    <button @click="() => state.count++">add</button>
  </div>
</template>

<script setup>
import { computed, reactive, watch, effect, watchEffect } from 'vue';
//不从vue引入，自己敲____二次渲染不刷新
// import { reactive } from './reactivity/reactive.js'
const state = reactive({
  count: 1,
})

// const state2 = reactive(state)//小可爱，纯纯浪费，没意义，能执行

// computed(()=>{
//   console.log('computed')
// })

// watchEffect(
//   ()=>{
//     console.log('watchEffect',state.count);
//   },
//   {
//     flush:'post',//组件渲染完毕执行
//     onTrack(){//调度函数
//       console.log('onTrack,会在count收集依赖的环节被调用')
//     },
//     onTrigger(){//调度函数
//       console.log('onTrigger,会在count依赖触发的环节被调用')
//     }
//   }
// )

// watch(
//   ()=>state.count,
//   ()=>console.log('watch'),
//   {immediate: true}//创建时立即执行
// )

effect(()=>{//类似于生命周期,一开始就会执行,源码里用的
  console.log('effect',state.count)
},{
  lazy: false,//加了lazy，不会立即执行
  scheduler:()=>{
    console.log('调度器中的任务执行了');
  }
})


</script>

<style lang="css" scoped>
</style>