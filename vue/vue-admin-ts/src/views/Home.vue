<template>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useSidebarStore } from '../store/sidebar';
import vHeader from '../components/Header.vue';
import vSidebar from '../components/Sidebar.vue';
import { computed } from 'vue';
const collapse = computed(()=>{
    return useSidebarStore().collapse;
});
</script>

<style scoped>

</style>