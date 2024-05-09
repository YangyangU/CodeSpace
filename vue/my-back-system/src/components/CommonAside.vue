<template>
    <div>
        <el-menu class="el-menu-vertical-demo" active-text-color="#ffd04b" background-color="#545c64" default-active="2" text-color="#fff"
            :collapse="store.isCollapse">
            <h3>{{ store.isCollapse ? '后台' : '后台管理系统' }}</h3>
            <el-menu-item v-for="item in nochildList" :key="item.name" :index="item.name"
                @click="handlerClick(item)">
                <el-icon><component :is="item.icon"/></el-icon>
                <template #title>{{ item.label }}</template>
            </el-menu-item>
            <el-sub-menu v-for="goods in haschildList" :key="goods.name" :index="goods.name">
                <template #title>
                    <el-icon><component :is="goods.icon"/></el-icon>
                    <span>{{ goods.label }}</span>
                </template>
                <el-menu-item v-for="item in goods.children" :key="item.name" :index="item.name"
                    @click="handlerClick(item)">{{ item.name }}</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
const handlerClick = (item) => {
    // console.log(item);
    // console.log(route);
    router.push({ name: item.name })
    store.addTabList(item)
}
const nochildList = computed(() => menuList.value.filter(item => !item.children))
const haschildList = computed(() => menuList.value.filter(item => item.children))
const menuList = computed(() => JSON.parse(localStorage.getItem('menu'))||store.menuList)
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