<template>
    <!-- tailwindcss原子化css  1 = 0.5rem-->
    <div class="flex items-center justify-between h-14">
        <div class="flex items-center pl-5">
            <IconPark :icon="Left" :size="iconSize" :strok-width="2" class="icon-button" @click="router.back()"></IconPark>
            <IconPark :icon="Right" :size="iconSize" :strok-width="2" class="icon-button" @click=""></IconPark>
            <div class="search ml-2">
                <SearchPop/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//使用vue-router提供的useRouter hook 函数获得路由对象
import { useRouter } from 'vue-router';
import { Left,Right } from '@icon-park/vue-next';
import SearchPop from '@/components/layout/header/SearchPop.vue'
const iconSize = 22
const router = useRouter();
</script>

<style scoped>

</style>