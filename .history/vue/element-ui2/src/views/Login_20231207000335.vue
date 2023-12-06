<template>
    <div class="login">
        <div class="login-wrap">
            <div class="title"><h2>登录</h2></div>
            <div class="item">
                <span>账号：</span>
                <input type="text" v-model="account" placeholder="账号">
                <!-- v-model同步数据源 -->
            </div>
            <div class="item">
                <span>密码：</span>
                <input type="text" v-model="password" placeholder="密码">
            </div>
            <div class="item">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                account:'admin',
                password:'123'
            }
        },
        methods: {
            login(){
                //获取用户输入的账号密码，再发起请求传给后端
                // console.log(this.account);
                if(this.account === ''|| this.password === ''){
                    alert('账号或密码不能为空')
                    return
                }
                // console.log(this.$router);//this代表vue实例，$官方定义
                //用js控制路由跳转
                // this.$router.push(`/home/${this.account}`)//第一种云括号
                // this.$router.push({path:'/home',query:{user:this.account}})//query传参
                // this.$router.push({name:'home',params:{user:this.account}})//第三种name
                this.$router.push({path:'/home',hash:`#${this.account}`})//第四种hash传参


            }
        }
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

        .title{
            text-align: center;
        }

        .item{
            display: flex;
            margin-top: 30px;

            input{
                flex:1;//分等分
                padding: 0 10px;
                border-radius: 10px;
                border: none;
                background-color: #d6d5d5;
            }

            button{
                font-size: 25px;
                flex: 1;
                border-radius: 30px;
                border: none;
                background: rgb(0, 183, 255);
                color: white;
                padding: 5px 0;
                cursor: pointer;//鼠标变小手
            }
        } 
    }
}
</style>