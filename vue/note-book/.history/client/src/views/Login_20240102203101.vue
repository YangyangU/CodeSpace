<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avater">
                <img src="https://img1.baidu.com/it/u=3661057457,567145783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
            </div>
        </div>
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</van-button>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.login{
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  h1{
    height: 0.6933rem;
    text-align: center;
    margin-top: 1.12rem;
    font-size: 0.48rem;
  }
  .login-wrapper{
    width: 7.44rem;
    height: 10.77rem;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 1.7rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);
    .avatar{
      width: 2.4rem;
      height: 2.4rem;
      overflow: hidden;
      border-radius: 50%;
      margin: 1rem auto 0.77rem;
      img{
        width: 100%;
      }
    }
  }
  .register{
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