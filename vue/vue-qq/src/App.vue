<script setup>
</script>

<template>
<Transition name="move">
    <router-view></router-view>
</Transition>
</template>

<style lang="less" scoped>
.move-enter-active, // move是动画名 enter是进入动画
.move-leave-active{  
  transition: all 0.5s ease-out;
}

.move-enter-from, 
.move-leave-to {
  transition: translateX(20px);  // 从偏离x轴右移了 10px 回归到目前的状态
  opacity: 0;   // 从全透明到不透明
}
</style>
