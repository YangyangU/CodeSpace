<template>
    <div>
        <ul>
            <li v-for="banner in banners" :key="banner.targetId">
                <img :src="banner.pic">
            </li>
        </ul>
    </div>
</template>

<script>
import { useBannerStore } from '../store/banner';
import { onMounted, toRefs } from 'vue';
const { banners } = toRefs(useBannerStore())

const { getBanners } = useBannerStore()
onMounted(async () => {
    await getBanners()
    await getPersonalized()
})
</script>

<style scoped></style>