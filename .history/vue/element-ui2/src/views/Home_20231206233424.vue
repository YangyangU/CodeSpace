<template>
    <div class="common-layout">
    <el-container>
      <el-header>
        <span>
            阳哥选课系统
        </span>
    </el-header>
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
            background-color: rgb(56, 255, 215);
            height: 80px;
            line-height: 80px;
            font-size: 30px;
        }
    }
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

</style>