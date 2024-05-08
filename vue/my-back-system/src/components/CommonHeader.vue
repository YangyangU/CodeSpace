<template>
    <div class="header-container">
        <div class="l-content">
            <div class="icon">
                <el-icon size="20px" @click="handler">
                    <Fold />
                </el-icon>
            </div>
            <div class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class='el-dropdown-link'>
                    <img class="user" src="@/assets/images/user.jpg" alt="">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '../store';
import { useRouter } from 'vue-router';

const router = useRouter()

const store = useStore()
const handler = () => {
    store.changeCollapse()
}
const logOut =()=>{
    localStorage.removeItem('token')
    router.push('/login')
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

    .l-content {
        display: flex;
        align-items: center;

        .icon {
            cursor: pointer;
        }
        
        .breadcrumb {
            margin-left: 20px;
            :deep(.el-breadcrumb__inner){//样式穿透
                color: #666;
            }
        }
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