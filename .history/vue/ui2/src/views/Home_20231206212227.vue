<template>
    <div class="common-layout">
            <el-container>
                        <el-header>
                                <span>选课系统</span>
                                <el-dropdown>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            Dropdown List
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>Action 1</el-dropdown-item>
                                <el-dropdown-item>Action 2</el-dropdown-item>
                                <el-dropdown-item>Action 3</el-dropdown-item>
                                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                                <el-dropdown-item divided>Action 5</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-dropdown>
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
            background-color: aliceblue;
            height: 80px;
            line-height: 80px;
        }
    }
}
</style>