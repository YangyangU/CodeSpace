<template>
	<view>
		about
	</view>
	<view class="btn">按钮</view>
	<button type="default">按钮</button>
	<view class="iconfont">&#xe600;</view>
	<view class="iconfont icon-yinle"></view>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
	const reqTask = uni.request({
		url:'https://mock.mengxuegu.com/mock/65a91554c4cd67421b34c8c3/movie/movieList',
		method:'GET',
		success: (res) => {
			console.log(res);
			uni.setStorage({
				key:'movieName',
				data:res.data.movieList[0].nm,//第一个电影名
				success() {
					uni.showToast({
						title:'保存成功',
						duration:2000,
						icon:'success'
					})
				}
			})
		}	
	})//.then(res=>{//跟success一样
		// console.log(res);
	// })
	// reqTask.abort()//请求终止
})
</script>

<style lang="scss">
.btn{
	button{
		width: 750rpx;//response rpx是根据屏幕宽度指定的响应式单位 750rpxiphone6宽度
	}
}
</style>
