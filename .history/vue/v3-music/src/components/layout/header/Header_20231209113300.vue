<template>
    <div class="flex items-center justify-between frag h-14">
        <div class="flex items-center pl-5">
            <IconPark :icon="Left" :size="iconSize" stroke-width="2"
            class="icon-button"/>
            <IconPark :icon="Right" :size="iconSize" stroke-width="2"
            class="icon-button"/>
        </div>
        <div class="flex items-center mr-5">
            <IconPark :icon="Mail" :size="iconSize" stroke-width="2"
            class="icon-button"/>
            <IconPark :icon="Platte" :size="iconSize" stroke-width="2"
            class="icon-button"/>
            <IconPark :icon="HamburgerButton" :size="iconSize" stroke-width="2"
            class="icon-button"/>
        </div>
    </div>
</template>

<script setup>
import IconPark from '@compontents/common/IconPark.vue'
import { Hamburger, HamburgerButton, Left,Right} from '@icon-park/vue-next'
</script>

<style scoped>

</style>