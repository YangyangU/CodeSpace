<template>
    <div>
        <el-menu class="el-menu-vertical-demo" active-text-color="#ffd04b" background-color="#545c64" default-active="2" text-color="#fff"
            :collapse="store.isCollapse">
            <h3>{{ store.isCollapse ? '后台' : '后台管理系统' }}</h3>
            <el-menu-item v-for="item in nochildList" :key="item.name" :index="item.name"
                @click="$router.push({ name: item.name })">
                <el-icon><component :is="item.icon"/></el-icon>
                <template #title>{{ item.label }}</template>
            </el-menu-item>
            <el-sub-menu v-for="goods in haschildList" :key="goods.name" :index="goods.name">
                <template #title>
                    <el-icon><component :is="goods.icon"/></el-icon>
                    <span>{{ goods.label }}</span>
                </template>
                <el-menu-item v-for="item in goods.children" :key="item.name" :index="item.name"
                    @click="$router.push({ name: item.name })">{{ item.name }}</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from '@/store';

const store = useStore()

const list = ref([
    {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'HomeFilled',
        url: 'Home/Home'
    },
    {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon: 'VideoPlay',
        url: 'MallManage/MallManage'
    },
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'UserFilled',
        url: 'UserManage/UserManage'
    },
    {
        label: '其他',
        icon: 'LocationFilled',
        children: [
            {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'Setting',
                url: 'Other/PageOne'
            },
            {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'Setting',
                url: 'Other/PageTwo'
            }
        ]
    }
])

const nochildList = computed(() => list.value.filter(item => !item.children))
const haschildList = computed(() => list.value.filter(item => item.children))
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    background-color: #2c2a38;
    height: 100vh;
    border-right: none;
    white-space: nowrap;
    h3 {
        color: white;
        text-align: center;
        line-height: 48px;
    }
}
</style>