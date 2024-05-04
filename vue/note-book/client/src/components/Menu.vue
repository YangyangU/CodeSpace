<template>
    <div class="menu-wrap">
      <div class="back" @click="hideMenu">
        <van-icon name="arrow-left" size="26px"/>
      </div>
      <section class="header">
        <div class="avatar">
          <img src="https://img1.baidu.com/it/u=3661057457,567145783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        </div>
        <p class="user">{{store.state.nickname}}</p>
      </section>
      <div class="setting">
        <div class="set-item">
          <van-icon name="contact" size="0.4rem"/>
          <span @click="toMine">个人主页</span>
        </div>
        <div class="set-item">
          <van-icon name="bullhorn-o" size="0.4rem"/>
          <span @click="toMessage">消息通知</span>
        </div>
        <div class="set-item">
          <van-icon name="revoke" size="0.4rem"/>
          <span @click="backToLogin">退出登录</span>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { useRouter } from 'vue-router'
import store from '../store';
const router = useRouter()
const emit = defineEmits(['hidden'])
const hideMenu = ()=>{
  emit('hidden',false)
}
const backToLogin = ()=>{
  router.push('/login')
  // sessionStorage.removeItem('userInfo')
  localStorage.removeItem('my-app-store')//触发清空用户数据
  hideMenu()
}
const toMine = ()=>{
  router.push('/mine')
  hideMenu()
}
const toMessage = ()=>{
  router.push('/message')
  hideMenu()
}
</script>

<style lang="less" scoped>
.menu-wrap{
  background-color: #eeecee;
  padding: 1.4rem 1rem;
  box-sizing: border-box;
  .back{
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar{
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 10px;
      img{
        width: 100%;
      }
    }
    .user{
      color: #101010;
      font-size: 0.37333rem;
    }
  }
  .setting{
    margin-top: 1rem;
    padding-left: 30%;
    .set-item{
      height: 1.2rem;
      line-height: 1.2rem;
      span{
        font-size: 0.4rem;
        color: #101010;
        margin-left: 10px;
      }
    }
  }
}
</style>