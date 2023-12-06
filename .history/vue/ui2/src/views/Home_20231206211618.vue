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
        
    }
</script>

<style lang="less" scoped>
.common-layout{
    height: 100vh;
    .el-container{
        height: 100%;
        .el-header{
            border-color: aliceblue;
        }
    }
}
</style>