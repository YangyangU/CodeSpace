<!-- 将头部写在外面再导进来 -->
<template>
  <Header/>
  <router-view/>
</template>
<script>
import Header from '@/components/header/Header.vue'
// import axios from 'axios'//node_module里面不用写路径
import {getSeller} from '@/api/index.js'//index.js可省略
export default {
  components:{//声明
    Header,
  },
  // created(){//写在这里不好 api文件夹
  //   axios.get('/api/seller')
  //   .then((data)=>{
  //     console.log(data);
  //   })
  // }

}
</script>
<style lang="less">

</style>
