<template>
    <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            tiaozhuan(){
                this.$router.push('/about')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>