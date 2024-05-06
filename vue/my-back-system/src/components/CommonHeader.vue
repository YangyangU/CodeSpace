<template>
    <div class="header-container">
        <div class="l-content">
            <el-icon size="20px" class="icon" @click="handler">
                <Fold />
            </el-icon>
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class='el-dropdown-link'>
                    <img class="user" src="@/assets/images/user.jpg" alt="">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '../store';
const store = useStore()
const handler = () =>{
    store.changeCollapse()
}
</script>

<style lang="less" scoped>
.header-container {
    height: 60px;
    color: #fff;
    background-color: #2c2a38;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .icon {
        cursor: pointer;
    }

    .text {
        font-size: 14px;
        margin-left: 20px;
        vertical-align: super;
    }

    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background-color: #fff;
        margin-right: 20px;
        cursor: pointer;

    }

    :focus-visible {
        outline: none
    }
}
</style>