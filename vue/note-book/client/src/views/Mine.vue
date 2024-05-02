<template>
    <div>
        <div class="user-info">
            <img :src="userInfo.avatar" alt="avatar" class="user-avatar" />
            <span class="user-name">{{ userInfo.name }}</span>
        </div>
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
    .user-info {
        display: flex;
        align-items: center;
    }

    .user-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .user-name {
        margin-left: 10px;
    }

    .change-btn {
        margin-top: 10px;
    }
</style>
