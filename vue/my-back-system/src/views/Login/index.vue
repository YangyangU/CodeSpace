<template>
    <div class="login-container">
        <el-form label-width="70px" :model="form" :rules="rules" :inline="true" ref="loginForm">
            <div class="login-title">
                <h2 style="margin-bottom: 20px;">登录</h2>
            </div>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item>
                <el-button style="margin:10px 0 10px 105px;" type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getMenu } from '@/api'
import { useRouter } from 'vue-router'
import { useStore } from '@/store';

const router = useRouter();
const loginForm = ref(null);
const store = useStore();

const form = ref({
    username: 'admin',
    password: '123456'
});

const rules = ref({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

const handleLogin = () => {
    loginForm.value.validate((valid) => {
        if (valid) {
            getMenu(form.value).then(res => {
                console.log(res);
                if (res.data.code === 20000) {
                    store.getMenuList(res.data.data.menu)
                    // console.log(router);
                    localStorage.setItem('token', res.data.data.token)
                    router.push('/main')
                    ElMessage({
                        message: res.data.data.message,
                        type: 'success',
                    })
                } else if (res.data.code === -999) {
                    ElMessage({
                        message: res.data.data.message,
                        type: 'error',
                    })
                }
            })
        }
    })
}
</script>

<style lang="less" scoped>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    margin: 180px auto;
    box-sizing: border-box;

    .login-title {
        text-align: center;
        margin-bottom: 35px;
    }

    .el-input {
        width: 200px;
    }
}
</style>