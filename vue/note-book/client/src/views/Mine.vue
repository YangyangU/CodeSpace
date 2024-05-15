<template>
    <div class="mine">
        <div class="avatar">
            <img src="https://img1.baidu.com/it/u=3661057457,567145783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt="">
        </div>
        <p class="user">阳阳羊</p>
        <button class="change-btn" @click="changeAvatarAndName">更换头像昵称</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const userInfo = ref({
    avatar: '../assets/img/raw_1512446162.png',
    name: '用户123'
});

function changeAvatarAndName() {
    // 在这里添加更换头像和昵称的逻辑
}
</script>

<style lang="less" scoped>
.mine {
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 30px 0;

        img {
            width: 100%;
        }
    }
    .user {
        font: bolder 0.4rem/1.5 "PingFang SC";
        color: #101010;
        font-size: 0.5rem;
    }
}
</style>
