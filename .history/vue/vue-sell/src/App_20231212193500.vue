<!-- 将头部写在外面再导进来 -->
<template>
  <Header :seller="sellerData"/><!-- :要绑定才能当作变量 -->
  <router-view/>
</template>
<script>
import Header from '@/components/header/Header.vue'
// import axios from 'axios'//node_module里面不用写路径
import {getSeller} from '@/api'//index.js可省略
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
  created(){
    getSeller().then(res=>{
      console.log(res);
      this.sellerData = res
    })
  },
  data(){
    return {
      sellerData:{}//最终变成打印的对象
    }
  }

}
</script>
<style lang="less">

</style>
