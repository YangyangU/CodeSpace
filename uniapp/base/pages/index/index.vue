<template>
	<view class="content">
		<!-- 跳路由，标签跳转，方便包装 -->
		<navigator url="/pages/about/about">去关于页</navigator>
		<image class="logo" src="/static/logo.png" @click="jump"></image>
		<view class="text-area">
			<text class="title" @click="changeTitle">{{title}}</text>
			<text @click="changeTitle">{{reverseTitle}}</text>
		</view>
		<view class="name">
			<text>{{name}}</text>
		</view>
		<song :data='list.song'></song>
	</view>
</template>

<script setup>
import song from '../../components/song/song.vue'
import {computed, reactive, ref} from 'vue'
// import {router} from 'vue-router'//不用引入

const title = ref('你好')
const jump = ()=>{
	uni.navigateTo({
		url:'/pages/about/about'
	})
}
// getApp().globalData.name//全局变量
console.log(getApp().globalData.name);
const name = getApp().globalData.name

const changeTitle=()=>{
	title.value = title.value === '你好' ? 'hello' : '你好'
}

const reverseTitle=computed(()=>{
	return title.value.split('').reverse().join('')
})

const list = reactive({
	song:{
		img:'https://tse3-mm.cn.bing.net/th/id/OIP-C.MzAiEAg3-6qkTLexWmRA9wAAAA?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
		title:'卡通头像',
		price:'10',
		marketPrice:'13'
	}
})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
