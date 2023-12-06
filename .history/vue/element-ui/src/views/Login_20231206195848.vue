<template>
    <div class="login">
        <div class="login-wrap">
            <div>
                <span>账号：</span>
                <input type="text">
            </div>
            <div>
                <span>密码：</span>
                <input type="text">
            </div>
            <div>
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
    background-color: rgb(168, 168, 168);
    .login-wrap{
        width: 400px;
        height: 300px;
        background-color:#fff;
        border-radius: 15px;
        box-shadow: 0 0 100px #f3b7b7;
        padding: 20px;
    }
}
</style>