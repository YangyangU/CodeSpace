<template>
    <div class="register">
        <div class="register-wrapper">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="state.nickname" name="昵称" label="昵称" placeholder="请输入您的昵称"
                        :rules="[{ required: true, message: '请填写昵称' }]" />
                    <van-field v-model="state.username" name="用户名" label="用户名" placeholder="请输入您的用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"/>
                    <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="请输入您的密码"
                        :rules="[{ required: true, message: '请填写密码' }]"/>
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button  round block type="primary" native-type="submit" color="#217d70">注册</van-button>
                </div>
            </van-form>
        </div>
        <p class="login" @click="login">已有账号？点击登录</p>
    </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router';
import { showSuccessToast } from 'vant';
import axios from '../api';

const router = useRouter()
const state = reactive({
    nickname: '',
    username: '',
    password: ''
})

const login = () =>{
    router.push('/login')
}

const onSubmit = async () =>{
    const res = await axios.post('/login',{
        nickname: state.nickname,
        username: state.username,
        password: state.password
    })
    showSuccessToast('注册成功')
    setTimeout(() => {
        router.push('/login')
    }, 1500)
}

</script>

<style lang="less" scoped>

.register {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/login.jpg');
    background-size: 100% 100% ;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    .register-wrapper {
        width: 7.44rem;
        height: 9rem;
        margin: 0 auto;
        margin-top: 7.44rem;
        border-radius: 0.3rem;
    }

    .login {
        position: absolute;
        bottom: 30px;
        width: 80%;
        left: 50%;
        text-align: center;
        transform: translateX(-50%);
        font-size: 0.374rem;
        line-height: 1rem;
        color: rgba(16, 16, 16, 1);
    }
}
</style>

<style>
.van-cell__title.van-field__label{
    width: 45px;
}
</style>