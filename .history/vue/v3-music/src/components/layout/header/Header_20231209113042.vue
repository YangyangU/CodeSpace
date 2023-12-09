<template>
    <div class="flex items-center justify-between frag h-14">
        <div class="flex items-center pl-5">
            <IconPark :icon="Left" :size="iconSize" stroke-width="2"/>
        </div>
        <div class="flex items-center mr-5"></div>
    </div>
</template>

<script setup>
import IconPark from '@compontents/common/IconPark.vue'
import { Left,Right} from '@icon-park/vue-next'
</script>

<style scoped>

</style>