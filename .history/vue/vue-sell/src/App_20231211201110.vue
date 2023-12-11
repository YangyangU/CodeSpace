<template>
  <!-- 将头部写在外面再导进来 -->
  <router-view/>
</template>
<script>
import Header from '@components/header/Header.vue'
export default {
  components:{//声明
    Header,
  }
}
</script>
<style lang="less">

</style>
