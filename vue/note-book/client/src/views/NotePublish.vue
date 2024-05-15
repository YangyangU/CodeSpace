<template>
    <div class="note-publish">
        <div class="editor">
            <QuillEditor theme="snow" placeholder="请输入笔记内容" v-model:content='state.content' content-type="html" @text-change="contentChange"/>
        </div>
        <div class="note-wrap">
            <div class="note-cell">
                <van-field v-model="state.title" label="标题" placeholder="请输入用户名" />
            </div>
            <div class="note-cell">
                <van-field label="图片">
                    <template #input>
                        <van-uploader v-model="state.picture" multiple max-count='1' :after-read="afterRead"/>  
                    </template>
                </van-field>
            </div>
            <div class="note-cell">
                <div class="sort" @click="() => { state.sortShow = true }">
                    <span>分类</span>
                    <span>{{ state.note_type }}<van-icon name="arrow"/></span>
                </div>
                <van-action-sheet v-model:show="state.sortShow" :actions="actions" @select="onSelect" />
            </div>
        </div>
        <div class="btn">
            <van-button block round color="linear-gradient(to right, skyblue, blue)" @click="onSubmit">发布</van-button>
        </div>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive } from 'vue';
import axios from '../api'
import { showSuccessToast } from 'vant';
import { useRouter } from 'vue-router'


const router = useRouter()
const state = reactive({
    content:'',
    title:'',
    picture:[],
    sortShow:false,
    note_type:'美食'
})
const actions = [
    {name: '美食' },
    {name: '旅行' },
    {name: '恋爱' },
    {name: '学习' },
    {name: '吵架' },
]
const onSelect = (item)=>{
    // console.log(item);//数组里的每一项
    state.note_type = item.name
    state.sortShow = false
}
const contentChange =()=>{
    // console.log(state.content);
}
const afterRead = ()=>{
    // console.log(state.picture[0].content);//图片被读成base64
}
const onSubmit=async()=>{
    const nickname = JSON.parse(localStorage.getItem('my-app-store')).nickname
    const userId = JSON.parse(localStorage.getItem('my-app-store')).id

    const res = await axios.post('/publish',{
        note_content: state.content,
        title: state.title,
        head_img: state.picture[0].content,
        note_type: state.note_type,
        nickname: nickname,
        userId: userId,
    })
    // console.log(res);
    showSuccessToast(res.msg)
    setTimeout(()=>{
        router.push('/noteClass')
    },1500)
}
</script>

<style lang="less" scoped>
.note-publish{
  min-height: 100vh;
  position: relative;
  .note-wrap{
    margin-top: 20px;
    .note-cell{
      border-bottom: 1px solid #d1d5db;
      .sort{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 3;
        padding: 10px 16px;
        color: #323233;
      }
    }
  }
  .btn{
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    position: sticky;
    bottom: 10px;
  }
}
</style>

<style>
.ql-container.ql-snow{
  height: 200px;
}
</style>