<template>
    <div>
        <button @click="updateList">更新列表</button>
        <ul>
            <li v-for="i in list">{{i}}</li>
        </ul>
    </div>
</template>

<script setup>
import {nextTick, onMounted, ref} from 'vue'
import {myNextTick} from './next-tick.js'

const list = ref(new Array(20).fill(0))

const updateList = ()=>{
    list.value.push(...(new Array(10).fill(1)))//再放十个1
    
    //实现点击跳转
    // const listItem = document.querySelector('li:last-child')
    // listItem.scrollIntoView({behavior: 'smooth'})//通过js滚动到某一个DOM结构
    //没有滚到最后一个li

    nextTick (()=>{//在nextTick中执行
        const listItem = document.querySelector('li:last-child')
        listItem.scrollIntoView({behavior: 'smooth'})
    })

    //手写nextTick
    // myNextTick(()=>{
    //     const listItem = document.querySelector('li:last-child')
    //     listItem.scrollIntoView({behavior: 'smooth'})
    // })
}

// myNextTick(()=>{
//     console.log('nextTick');
// })
// onMounted(()=>{
//     console.log('onMounted');
// })

</script>

<style lang="css" scoped>

li{
    list-style: none;
    font-size: 64px;
    height: 100px;
    background-color: #42b883aa;
    margin: 10px;
}
</style>