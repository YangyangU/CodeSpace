<template>
    <div class="login">
        <div class="login-wrap">
            <div class="item">
                <span>账号：</span>
                <input type="text">
            </div>
            <div class="item">
                <span>密码：</span>
                <input type="text">
            </div>
            <div class="item">
                <button>登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.login{
    width: 100vw;
    height: 100vh;
    display: flex;//弹性容器居中
    justify-content: center;//主轴水平
    align-items: center;//垂直
    background-color: #8d8d8da8;
    .login-wrap{
        width: 400px;
        height: 300px;
        background-color:#fff;
        border-radius: 15px;
        box-shadow: 0 0 100px #ffffff;
        padding: 20px;
        // box-sizing: border-box;//ie标准
        font-size: 25px;

        .item{
            display: flex;
            input{
            flex:1
        }
        }
        
    }
}
</style>