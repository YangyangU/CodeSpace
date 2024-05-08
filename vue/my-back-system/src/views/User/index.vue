<template>
    <div>
        <el-dialog v-model="dialogVisible" title="提示" width="50%">
            <span>
                <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" style="padding: 0 50px;">
                    <el-form-item label="姓名" prop="name">
                        <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input placeholder="请输入年龄" v-model.number="form.age"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="form.sex" placeholder="请选择性别">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出生日期" prop="birth">
                        <el-date-picker v-model="form.birth" type="date" placeholder="选择日期" value-format="YYYY-MM-DD"
                            style="width: 100%" />
                    </el-form-item>
                    <el-form-item label="地址" prop="addr">
                        <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="handleClose">取消</el-button>
                    <el-button type="primary" @click="handleSubmit">确认</el-button>
                </div>
            </template>
        </el-dialog>
        <div class="tab">
            <el-button color="#ffd04b" @click="handleAdd">
                新增 +
            </el-button>
            <div>
                <el-input v-model="input" style="width: 240px" placeholder="输入姓名搜索" :prefix-icon="Search" />
                <el-button type="primary" @click="handleSearch" style="margin-left: 10px;">
                    搜索
                </el-button>
            </div>
        </div>
        <el-card style="margin: 10px 0;">
            <el-table :data="tableData" stripe style="width: 100%;height:500px">
                <el-table-column prop="name" label="姓名" />
                <el-table-column prop="age" label="年龄" />
                <el-table-column prop="sex" label="性别">
                    <template #default="scope">{{ scope.row.sex === 1 ? '男' : '女' }}</template>
                </el-table-column>
                <el-table-column prop="birth" label="出生日期" min-width="103px" />
                <el-table-column prop="addr" label="地址" width="280px" />
                <el-table-column prop="" label="操作" min-width="133px">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                            编辑
                        </el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-card :body-style="{ padding: 13 + 'px' }" style="display: flex;justify-content: center;">
            <el-pagination background layout="prev, pager, next" :total="total" @change="handlePage"/>
        </el-card>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getUser, addUser, updateUser, deleteUser } from '@/api'
import { Search } from '@element-plus/icons-vue'

const input = ref('')
const dialogVisible = ref(false)
const formRef = ref(null)
const tableType = ref(1)
const total = ref(0)
const form = ref({
    name: '',
    age: '',
    sex: '',
    birth: '',
    addr: ''
})
const tableData = ref([])
const pageData = ref({})
const rules = ref({
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
    age: [
        { required: true, message: '请输入年龄', trigger: 'blur' },
        { type: 'number', message: '年龄必须为数字' },
    ],
    sex: [
        { required: true, message: '请选择性别', trigger: 'change' }
    ],
    birth: [
        { required: true, message: '请选择出生日期', trigger: 'change' }
    ],
    addr: [
        { required: true, message: '请输入地址', trigger: 'blur' }
    ]
})

const handleSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            if (tableType.value === 1) {//添加逻辑
                dialogVisible.value = false
                console.log(form.value);
                addUser(form.value).then(() => {
                    getUserList()
                })
                formRef.value.resetFields()
            } else {//编辑逻辑
                dialogVisible.value = false
                // console.log(form.value)
                updateUser(form.value).then(() => {
                    getUserList()
                })
                formRef.value.resetFields()
            }
        }
    })
}
const handleClose = () => {
    dialogVisible.value = false
    formRef.value.resetFields()
}

onMounted(() => {
    getUserList()
})

const getUserList = async () => {
    const data = await getUser({params: {...{name:input.value},...pageData.value}})
    // console.log(data.data.count);
    tableData.value = data.data.list
    total.value = data.data.count || 0
}

const handleEdit = (index, row) => {
    dialogVisible.value = true
    tableType.value = 0
    // console.log(index,row);
    form.value = row
    form.value.sex = form.value.sex === 1 ? '男' : '女'
}
const handleAdd = () => {
    dialogVisible.value = true
    tableType.value = 1
}
const handleDelete = (index, row) => {
    ElMessageBox.confirm(
        '你确定要删除吗？',
        '提示',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            deleteUser({id:row.id}).then(() => {
                ElMessage({
                    type: 'success',
                    message: '删除成功',
                })
            })
            getUserList()
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消',
            })
        })
}
const handleSearch = () => {
    getUserList()
}

const handlePage = (pageNum)=>{
    pageData.value.page = pageNum
    getUserList()
    // console.log(pageNum);
}

</script>

<style lang="less" scoped>
.tab {
    display: flex;
    justify-content: space-between;
}
</style>