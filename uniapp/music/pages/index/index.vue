<template>
	<view class="index">
		
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
				<view class="search">
					<uni-search-bar placeholder="歌曲" @confirm="search" @input="input" ></uni-search-bar>
				</view>
			</template>
		</wyheader>
		
		<!-- menu -->
		<menuLeft></menuLeft>
		<!-- banner -->
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#eee" indicator-active-color="#d81e06" circular>
				<swiper-item v-for="item in state.banners" :key="item.encodeId">
					<view class="swiper-item">
						<image :src='item.pic' mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
// import wyheader from '../../components/wyheader/wyheader.vue'
import {apiGetBanner} from '@/api/index.js'
import {onLoad} from '@dcloudio/uni-app'
import {reactive} from 'vue'

const state = reactive({
	banners:[]
})

onLoad(()=>{
	getBanner()
})

const getBanner =()=>{
	apiGetBanner({type:2}).then(res=>{
		console.log(res.data.banners);
		state.banners = res.data.banners
	})
}

</script>

<style lang="scss" scoped>
.index{
	padding: 0 15rpx;
	.search{
		width: 500rpx;
		height: 60rpx;
		:deep(.uni-searchbar){
			height: 100%;
			padding: 0;
			.uni-searchbar__box{
				padding: 0;
				height: 100%;
			}
		}
	}
	.banner{
		border-radius: 10px;
		overflow: hidden;
		.swiper-item{
			width: 740rpx;
			margin: 0 5rpx;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>

