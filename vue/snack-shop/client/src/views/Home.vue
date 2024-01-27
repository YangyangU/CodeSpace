<template>
    <div class="home-warp">
        <Search />
        <div class="view">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script setup>
import Search from '../components/Search.vue'
const images = [
    'src/assets/images/home1.jpg',
    'src/assets/images/home2.jpg',
    'src/assets/images/home3.jpg',
    'src/assets/images/home4.jpg'
]
</script>

<style lang="less" scoped>
.home-warp {
    background-color: #217d70;
    .view{
        width:100%;
        height: 5rem;
        overflow: hidden;
        img{
            height: 5rem;
        }
    }
}
</style>