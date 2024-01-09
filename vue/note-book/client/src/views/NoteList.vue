<template>
    <div class="note-list">
        <ul v-if="state.noteList.length">
            <li v-for="item in state.noteList" :key="item.id" @click="goNoteDetail(item.id)">
                <div class="img">
                    <img :src="item.head_img" alt="">
                </div>
                <p class="time">{{ item.c_time }}</p>
                <p class="title">{{ item.title}}</p>
            </li>
        </ul>
        <p class="empty" v-else>当前分类还没有日记哦~~</p>
    </div>
</template>

<script setup>
import { onBeforeMount,onMounted,onUnmounted } from 'vue';
import {useRouter,useRoute} from 'vue-router'
import axios from '../api'
import { reactive } from 'vue';
//生命周期介绍
// console.log('hello world',document.querySelector('.note-list'));//编译

// onBeforeMount(()=>{
//     console.log('onBeforeMount',document.querySelector('.note-list'));//挂载前
// })
// onMounted(()=>{
//     console.log('onMounted',document.querySelector('.note-list'));//挂载完
// })
// onUnmounted(()=>{
//     console.log('onUnmounted');//卸载 跳转到别的页面 卸载的时候清空定时器
// })
const router = useRouter() //路由实例  跳转路由用这个
const route = useRoute() //当前路由详情
// console.log(router.currentRoute.value);
// console.log(route.query.title);
onMounted(async()=>{
//页面加载中发请求，拿到当前分类的数据
    const {data} = await axios.post('/findNoteListByType',{
        note_type:route.query.title
    })
    // console.log(data);
    state.noteList = data
})
const state = reactive({
    noteList:[]
})
const goNoteDetail = (id)=>{
    // router.push(`/noteDetail/${id}`)
    router.push({path:'/noteDetail',query:{id:id}})
}

</script>

<style lang="less" scoped>
.note-list{
    width: 100%;
    padding: 1rem 0.667rem 0;
    box-sizing: border-box;
    ul{
        display: grid;//用网格布局更优雅
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 30px;
        // overflow: auto;//消除浮动
        // display: flex;//弹性布局
        // flex-wrap: wrap;
        // justify-content: space-between;
        li{
            // width: 4rem;
            // width: 50%;
            // padding: 0 10px;
            // box-sizing: border-box;
            // float: left;//浮动布局
            img{
                width: 100%;
                // width: 2rem;
                height: 4rem;
                border-radius: 0.27rem;
            }
            .time{
                font-size: 0.37rem;
                color: rgba(16,16,16,1);
                margin: 10px 0 5px 0;
            }
            .title{
                width: 4rem;
                font-size: 0.37rem;
                color: rgba(16,16,16,1);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>