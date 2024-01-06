<template>
    <div class="sidebar">
        <!-- 菜单 -->
        <el-menu class="sidebar-el-menu" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened :collapse="collapse" :default-active="route.path" router>
            <!-- slot 自定义组件的内部 -->
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon" />
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                             <el-menu-item :index="subItem.index" v-permiss="item.permiss">
                                {{ subItem.title }}
                             </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <el-icon>
                            <component :is="item.icon" />
                            <!-- 根据item.icon的值来决定渲染哪个组件 -->
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
// import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { useSidebarStore } from '../store/sidebar';

const route = useRoute()
// const onRoutes = computed(()=>{
    // return route.path;
// })
const collapse = computed(()=>sidebarStore.collapse)
const sidebarStore = useSidebarStore()

const items = [
    {
        title: '系统首页',
        index: '/dashboard',
        icon: 'Odometer',
        permiss:'1'
    },
    {
        title: '表格相关',
        index: '1',
        icon: 'Calendar',
        permiss:'2',
        subs:[
            {
                index:'/table',
                title:'常用表格',
                permiss:'2'
            },
            {
                index:'/import',
                title:'导出Excel',
                permiss:'2'
            }
        ]
    },
    {
        icon:'Edit',
        index:'3',
        title:'表单相关',
        permiss:'4',
        subs:[
            {
                index:'/form',
                title:'基本表单',
                permiss:'5'
            },
            {
                index:'/upload',
                title:'上传文件',
                permiss:'6'
            }
        ]
    }
]
</script>

<style scoped>

</style>