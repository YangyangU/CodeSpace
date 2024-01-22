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
		<!-- balls -->
		<view class="balls">
			<div class="balls-item" v-for="item in state.balls" :key="item.id">
				<view class="icon">
					<image :src="item.iconUrl" mode="aspectFill"></image>
				</view>
				<text>{{item.name}}</text>
			</div>
		</view>
		
		<!-- 推荐歌单 -->
		<songList :recommend ="state.recommend" title="推荐歌单"/>
		
		<!-- 推荐歌曲 -->
		<recommendSong :songs ="state.songs"/>
		
		<!-- 雷达歌单 -->
		<songList :recommend ="state.personalizedList" title="阳阳的雷达歌单"/>
	</view>
</template>

<script setup>
// import wyheader from '../../components/wyheader/wyheader.vue'
import {apiGetBanner,apiGetBall,apiGetRecommendList,apiGetRecommendSong,apiGetPersonalizedList} from '@/api/index.js'
import {onLoad} from '@dcloudio/uni-app'
import {reactive} from 'vue'

const state = reactive({
	banners:[],
	balls:[],
	recommend:[],
	songs:[],
	personalizedList:[]
})

onLoad(()=>{
	getBanner()
	getBall()
	getRecommendList()
	getRecommendSong()
	getPersonalizedList()
})

//获取banner图
const getBanner = ()=>{
	apiGetBanner({type:2}).then(res=>{
		// console.log(res.data.banners);
		state.banners = res.data.banners
	})
}

//获取入口列表
const getBall = async()=>{
	const {data:{data:balls}} = await apiGetBall()//一层层结构得到数据
	// console.log(balls);
	state.balls = balls
}

//推荐歌单
const getRecommendList = async()=>{
	const {data:{recommend}} = await apiGetRecommendList()
	// console.log(recommend);
	state.recommend = recommend;
}

//推荐歌曲
const getRecommendSong = async()=>{
	const res = await apiGetRecommendSong()
	console.log(res.data.data.dailySongs);
	state.songs = res.data.data.dailySongs
}

//雷达歌单
const getPersonalizedList = async()=>{
	const res = await apiGetPersonalizedList()
	console.log(res.data.result);
	state.personalizedList = res.data.result
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
			// margin: 0 5rpx;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.balls{
		display: flex;
		overflow: scroll;
		margin: 30rpx 0;
		.balls-item{
			flex:0 0 20%;
			font-size: 20rpx;
			text-align: center;
			.icon{
				width: 70rpx;
				height: 70rpx;
				margin: 0 auto;
				margin-bottom: 14rpx;
				background-color: #d81e06;
				border-radius: 50%;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.recommend{
		.recommend-hd{
			display: flex;
			justify-content: space-between;
			font-size: 30rpx;
		}
		.recommend-bd{
			
		}
	}
}
</style>

