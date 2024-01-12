<template>
    <div class="w-screen h-screen flex item-stretch overflow-hidden">
        <div class="w-56 h-screen flex-shrink-0">
            <Menu />
        </div>
        <div class="flex-1 flex flex-col">
            <div class="h-14">
                <Header />
            </div>
            <div>
                <div class="flex-1 overflow-hidden">

                </div>
                <ElScrollbar>
                    <div class="container max-auto">
                        <router-view></router-view>
                    </div>
                </ElScrollbar>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>