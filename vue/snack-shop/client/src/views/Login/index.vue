<template>
    <div class="login">
        <div class="login-wrapper">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="state.username" name="用户名" label="用户名" placeholder="请输入您的用户名" label-align="top"
                        :rules="[{ required: true, message: '请填写用户名' }]"/>
                    <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="请输入您的密码" label-align="top"
                        :rules="[{ required: true, message: '请填写密码' }]"/>
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button  round block type="primary" native-type="submit" color="#217d70">登录</van-button>
                </div>
            </van-form>
        </div>
        <p class="register" @click="register">新用户？点击注册</p>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../api';//引入封装好的axios

const router = useRouter()

const state = reactive({
    username: '',
    password: '',
})

const onSubmit = async () => {
    //发请求，将state.username,state.password传给后端
    const res = await axios.post('/login',{
        username:state.username,
        password:state.password
    })
    //保存用户信息
    sessionStorage.setItem('userInfo',JSON.stringify(res.data))
    router.push('/home')
}

const register = () => {
    router.push('/register')
}
</script>

<style lang="less" scoped>

.login {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/login.jpg');
    background-size: 100% 100% ;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    .login-wrapper {
        width: 7.44rem;
        height: 9rem;
        margin: 0 auto;
        margin-top: 7.44rem;
        border-radius: 0.3rem;
    }

    .register {
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
