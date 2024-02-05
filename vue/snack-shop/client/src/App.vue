<script setup>
import { ref } from 'vue';

const active = ref('home');
const icon1 = {
    active: 'src/assets/images/shouyexuanzhong.png',
    inactive: 'src/assets/images/shouye.png',
};
const icon2 = {
    active: 'src/assets/images/jinrudianpu.png',
    inactive: 'src/assets/images/dianpu.png',
};
const icon3 = {
    active: 'src/assets/images/gouwuchexuanzhong.png',
    inactive: 'src/assets/images/gouwuche.png',
};
const icon4 = {
    active: 'src/assets/images/wodexuanzhong.png',
    inactive: 'src/assets/images/wode.png',
};

const onClickLeft = () => history.back();
</script>

<template>
    <div class="head">
        <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
    </div>
    <div>
        <router-view></router-view>
    </div>
    <div class="foot">
        <van-tabbar v-model="active" active-color="#07c160">
            <van-tabbar-item name="home" to="/home">
                <span>首页</span>
                <template #icon="props">
                    <img :src="props.active ? icon1.active : icon1.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/shops">
                <span>店铺</span>
                <template #icon="props">
                    <img :src="props.active ? icon2.active : icon2.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/cart">
                <span>购物车</span>
                <template #icon="props">
                    <img :src="props.active ? icon3.active : icon3.inactive" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/mine">
                <span>我的</span>
                <template #icon="props">
                    <img :src="props.active ? icon4.active : icon4.inactive" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style lang="less" scoped></style>
