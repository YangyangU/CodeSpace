<template>
    <div class="home-warp">
        <Search />
        <div class="view">
            <van-swipe :autoplay="3000" loop indicator-color="#217d70">
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script setup>
import Search from '../components/Search.vue'
import Foot from '../components/Foot.vue'
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
        display: flex;
        img{
            height: 100%;
            width: 100%;
        }
    }
}
</style>