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
.common-layout {
    height: 100vh;

    .el-container {
        height: 100%;

        .el-header {
            background-color: antiquewhite;
            height: 80px;
            line-height: 80px;
            font-size: 30px;
        }
    }
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

</style>