<template>
    <div class="login">
        <div class="flicker">登录</div>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://img1.baidu.com/it/u=3661057457,567145783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                    alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>
        <p class="register" @click="register">新用户？点击注册</p>
    </div>
</template>

<script setup>
import { reactive } from 'vue'; //reactive将引用类型变成响应式  多个变量
import { useRouter } from 'vue-router';
import axios from '../api';//引入封装好的axios
import store from '../store';

const router = useRouter()
//ref 原始类型变成响应式 一个一个
// import {ref} from 'vue';
// const username = ref('')
// const password = ref('')

const state = reactive({
    username: 'xyy',
    password: '123',
})

const onSubmit = async () => {
    //发请求，将state.username,state.password传给后端
    // console.log(state.username,state.password);
    const res = await axios.post('/login', {//封装好会给你拼上localhost...
        username: state.username,
        password: state.password
    })
    // console.log(res);
    store.commit('getUserInfo', res.data)//将用户信息存入vuex
    store.commit('getToken', res.token)//将token存入vuex
    // console.log(store.state.token);
    //保存用户信息
    // localStorage.setItem('userInfo', JSON.stringify(res.data))//存入会话存储，键值，只能传字符串
    // localStorage.setItem('token', JSON.stringify(res.token))
    router.push('/noteClass')
}

const register = () => {
    router.push('/register')
}
</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    .flicker {
        height: 0.6933rem;
        text-align: center;
        margin-top: 1.12rem;
        font-size: 0.8rem;
        color: #5274fb;
        /*设置文字颜色*/
        //    font-size:64px; /*设置字体大小*/
        font-weight: bolder;
        /*设置字体粗细*/
        -webkit-animation: flicker 2s infinite;
        /*设置动画*/
    }

    @-webkit-keyframes flicker {
        /*创建动画*/
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    .login-wrapper {
        width: 7.44rem;
        height: 10.77rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto;
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);

        .avatar {
            width: 2.4rem;
            height: 2.4rem;
            overflow: hidden;
            border-radius: 50%;
            margin: 1rem auto 0.77rem;

            img {
                width: 100%;
            }
        }
    }

    .register {
        position: absolute;
        bottom: 30px;
        width: 80%;
        left: 50%;
        text-align: center;
        font-size: 0.374rem;
        transform: translateX(-50%);
        height: 0.6rem;
        line-height: 0.6rem;
        color: rgba(16, 16, 16, 1);
    }
}
</style>

<style>
.van-cell__title.van-field__label {
    width: 45px;
}
</style>