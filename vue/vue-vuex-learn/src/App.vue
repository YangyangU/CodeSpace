<template>
  <div>
    {{store.state.moduleA.msg}}
    <br>
    {{store.state.moduleB.msg}}
    <!-- hello juejin -->
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
let store = useStore()
console.log(store.state.moduleA.msg);
store.commit('moduleA/changeMsg','hello juejin')
console.log(store.state.moduleA.msg);
</script>
