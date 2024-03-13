<script setup>
import { computed, ref } from "vue";
import { useStore } from "./store/gvuex.js";

let store = useStore()

const count = computed(()=>store.state.count)
const double = computed(()=>store.getters.double)

const add=()=>{
  store.commit('add')
}
const asyncAdd=()=>{
  store.dispatch('asyncAdd')
}
</script>

<template>
  <div>
    {{ count }} * 2 = {{ double }}
    <br>
    <button @click="add">add</button>
    <button @click="asyncAdd">async add</button>
  </div>
</template>

<style scoped>

</style>
