<template>
  <div>
    {{storeA.msg}}
  </div>
</template>

<script setup>
import { useModuleA } from './store';
let storeA = useModuleA()
console.log(storeA.msg);
storeA.changeMsg('hello juejin')
console.log(storeA.msg);
// storeA.$reset()
</script>

