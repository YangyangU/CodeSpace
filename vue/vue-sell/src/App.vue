<!-- 将头部写在外面再导进来 -->
<template>
  <v-header/>
  <router-view/>
</template>
<script>
import Header from '@/components/header/Header.vue'
export default {
  components:{//声明
    'v-header':Header,
  }
}
</script>
<style lang="less">

</style>
