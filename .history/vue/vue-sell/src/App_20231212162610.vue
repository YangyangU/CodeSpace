<!-- 将头部写在外面再导进来 -->
<template>
  <Header/>
  <router-view/>
</template>
<script>
import Header from '@/components/header/Header.vue'
import axios from 'axios'//node_module里面不用写路径
export default {
  components:{//声明
    Header,
  },
  created(){
    axios.get()
  }

}
</script>
<style lang="less">

</style>
