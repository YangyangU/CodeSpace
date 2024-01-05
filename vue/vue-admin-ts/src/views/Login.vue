<template>
    <div class="login-wrap">
        <div class="ms-Login">
            <!-- v-model 双向绑定 性能不好 表单的目的是收集数据  rules校验规则elp自代-->
            <div class="ms-title">后台管理系统</div>
            <!-- ref="login" 表示为 el-form 组件创建一个名为 login 的引用，这样在 JavaScript 中就可以通过 this.$refs.login 来访问 el-form 组件的实例 -->
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
               <el-form-item prop="username">
                   <el-input v-model="param.username" autofocus placeholder="请输入用户名"></el-input>
               </el-form-item>
               <el-form-item prop="password">
                   <el-input v-model="param.password" @keyup.enter="SubmitFrom(login)" placeholder="请输入密码" type="password"></el-input>
               </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="SubmitFrom(login)">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive,ref} from "vue"
import {ElMessage} from 'element-plus'
import {usePermissStore} from '../store/permiss'
import { useRouter } from "vue-router";
import type { FormInstance} from 'element-plus'

const permiss = usePermissStore()
const router = useRouter()

interface LoginInfo {
    username: string;
    password: string;
}
//和ref区别 
const login = ref()
console.log(login.value);
onMounted(()=>{
    console.log(login.value);
})
const param = reactive<LoginInfo>({
    username: '',
    password: ''
})

const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },//blur 是指当输入框失去焦点时进行验证。
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
    ]
}
//submit event elementplus formEl
const SubmitFrom=(fromEl:FormInstance | undefined) =>{//验证fromEl是否有效
    if(!fromEl){
        return
    }
    fromEl.validate((valid)=>{//调用fromEl.validate方法进行表单验证，传入一个回调函数valid作为参数；
        if(valid){
            ElMessage.success('登录成功')
            localStorage.setItem('ms_username', param.username)
            const keys = permiss.roleList[param.username == 'admin' ? 'admin' : 'user']
            localStorage.setItem('ms_keys', JSON.stringify(keys))
            router.push('/')
        }else{
            ElMessage.error('请校验表单')
        }
    })
}
</script>

<style scoped>

</style>