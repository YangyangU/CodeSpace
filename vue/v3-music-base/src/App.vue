<template>
  <!-- <Test>

    顺序打乱不影响,以子组件slot为准
    <template #footer>
      <div>footer</div>
    </template>

    承载指令
    <template #header>
      <div>header</div>
    </template>

    <div>没有name</div>
    默认不用template

    
  </Test> -->
  <RouterView/>
</template>

<script setup lang="ts">
import Test from '@/components/Test.vue'
</script>
<style lang="scss">
</style>