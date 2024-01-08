<template>
  <div>
    <Transition name="move">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.move-enter-active, .move-leave-active{
  transition: all 0.5s ease-out;//淡出
}
.move-enter-from, .move-leave-to{
  transform: translateX(20px);
  opacity: 0;
}
</style>