<template>
    <div>{{ count }}</div>
    <button @click="add">+1</button>
    <div> {{ nickname }}</div>
    <button @click="change">change</button>
    <div> {{ userInfo }}</div>
    <button @click="setUserInfo">change</button>

</template>

<script setup>
import {ref,watch} from 'vue'
const count = ref(0)
const nickname = ref('张三')
const add = () =>{
    count.value ++
}
const change = () =>{
    nickname.value = '李四'
}

// 1.监视单个数据
watch(count,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
// 2.多个数据
watch([count,nickname],(newArr,oldArr)=>{
    console.log(newArr,oldArr);//数组变化
})
// 3.immediate 立刻执行
watch(count,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
},{
    immediate:true,//第三个参数
})
// 4.deep深度监视
const userInfo = {
    name:'zs',
    age:18,
}
const setUserInfo =()=>{
    userInfo.value.age ++
}
watch(userInfo,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
},{
    deep:true//不加这个监视不到userInfo.age的变化
})
// 5.对于对象中的属性进行监视
watch(()=> userInfo.value.age,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
</script>
