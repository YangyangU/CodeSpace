<template>
    <div class="note-list">
        <ul>
            <li>
                <div class="img">
                    <img src="https://img1.baidu.com/it/u=3661057457,567145783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天去吃了华莱士今天去吃了华莱士今天去吃了华莱士</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://img1.baidu.com/it/u=3661057457,567145783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天去吃了华莱士</p>
            </li>
            <li>
                <div class="img">
                    <img src="https://img1.baidu.com/it/u=3661057457,567145783&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
                </div>
                <p class="time">2023/05/20</p>
                <p class="title">今天去吃了华莱士</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onBeforeMount,onMounted,onUnmounted } from 'vue';

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

onMounted(()=>{
//页面加载中发请求，拿到当前分类的数据

})

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