<template>
    <div>
        <el-dialog v-model="dialogVisible" title="提示" width="50%">
            <span>
                <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" style="padding: 0 50px;">
                    <el-form-item label="姓名" prop="name">
                        <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="form.sex" placeholder="请选择性别">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出生日期" prop="date">
                        <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 100%" />
                    </el-form-item>
                    <el-form-item label="地址" prop="address">
                        <el-input placeholder="请输入地址" v-model="form.address"></el-input>
                    </el-form-item>
                </el-form>

            </span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="onClose">取消</el-button>
                    <el-button type="primary" @click="onSubmit">确认</el-button>
                </div>
            </template>
        </el-dialog>
        <el-button color="#ffd04b" @click="dialogVisible = true" style="margin-bottom: 10px;">
            新增 +
        </el-button>
        <el-card>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="name" label="姓名" />
                <el-table-column prop="age" label="年龄" />
                <el-table-column prop="sex" label="性别">
                    <template #default="scope">{{ scope.row.sex === 1 ? '男' : '女' }}</template>
                </el-table-column>
                <el-table-column prop="birth" label="出生日期" />
                <el-table-column prop="addr" label="地址" width="280px" />
                <el-table-column prop="" label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                            编辑
                        </el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                            删除
                        </el-button></template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getUser } from '@/api'

const dialogVisible = ref(false)
const form = ref({
    name: '',
    age: '',
    sex: '',
    date: '',
    address: ''
})
const rules = ref({
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
    ],
    age: [
        { required: true, message: '请输入年龄', trigger: 'blur' },
        { type: 'Number', message: '年龄必须为数字值', trigger: 'blur' }
    ],
    sex: [
        { required: true, message: '请选择性别', trigger: 'change' }
    ],
    date: [
        { type: 'Date', required: true, message: '请选择日期', trigger: 'change' }
    ],
    address: [
        { required: true, message: '请输入地址', trigger: 'blur' }
    ]
})
const formRef = ref(null)
const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            dialogVisible.value = false
            formRef.value.resetFields()
            // console.log(form.value)
        }
    })
}
const onClose = () => {
    dialogVisible.value = false
    formRef.value.resetFields()
}

const tableData = ref([])

onMounted(async () => {
    const data = await getUser()
    console.log(data.data.list);
    tableData.value = data.data.list
})

const handleEdit=()=>{

}
const handleDelete=()=>{

}
</script>

<style lang="less" scoped></style>