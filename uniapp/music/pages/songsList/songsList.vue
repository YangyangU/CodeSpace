<template>
	<view class="songs-list">
		<!-- #ifndef  H5 -->
		<view class="head"></view>
		<!-- #endif -->
		<view class="header">
			<uni-icons type="left" size="22" color="#fff" @click="goBack"></uni-icons>
			<view class="title">歌单</view>
			<uni-icons type="more-filled" size="22" color="#fff"></uni-icons>
		</view>
		<view class="list-hd">
			<view class="hd-info">
				<view class="pic boxShadow">
					<image :src="info.coverImgUrl" mode="aspectFill"></image>
				</view>
				<view class="desc">
					<view class="title">{{info.name}}</view>
					<view class="user">
						<view class="avatar">
							<image :src="info.creator&&info.creator.avatarUrl" mode="aspectFill"></image>
						</view>
						<view class="nickname">{{info.creator&&info.creator.nickname}}</view>
						<uni-icons type="right" size="15" color="#fff"></uni-icons>
					</view>
				</view>
			</view>
			<view class="hd-status">
				<view class="share btn">
					<uni-icons type="redo-filled" size="16" color="#fff"></uni-icons>
					<text>分享</text>
				</view>
				<view class="commit btn">
					<uni-icons type="chat-filled" size="16" color="#fff"></uni-icons>
					<text>评论</text>
				</view>
				<view class="collection btn">
					<uni-icons type="folder-add-filled" size="16" color="#fff"></uni-icons>
					<text>收藏</text>
				</view>
			</view>
		</view>
		<view class="list-bd">
			<view class="bd-title">
				<view class="iconfont icon-bofang"></view>
				<text>全部播放</text>
				<text class="count">（{{info.trackCount}}）</text>
			</view>
			<view class="bd-content">
				<view class="item" v-for="(song,index) in list" :key="index" @click="showPlayer(song.id)">
					<view class="num">
						{{index + 1}}
					</view>
					<view class="song-desc">
						<view class="name">
							{{song.name}}
						</view>
						<view class="author">
							<!-- {{item.ar[0].name}} -->
							<text v-for="(item,index) in song.ar" :key="item.id">
								{{item.name}}
								<text v-if="index != song.ar.length-1">/ </text>
							</text>
							<text>- {{song.al&&song.al.name}}</text>
						</view>
					</view>
					<view class="iconfont icon-more"></view>
				</view>
			</view>
		</view>
		
		<!-- 播放器 -->
		<musicPlayer />
	</view>
</template>

<script setup>
import {apiGetPlayList,apiGetPlayListDetail} from '@/api/songs.js'
import {onLoad} from '@dcloudio/uni-app'
import {ref} from 'vue';
import {useStore} from 'vuex'

const store = useStore()
const info = ref({})
const list = ref([])

const goBack = () =>{
	uni.navigateBack()
}

onLoad((option)=>{
	// console.log(option.id);//从拿到url携带的参数，只有onLoad有
	getPlayList(option.id)
	getPlayListDetail(option.id)
})

const getPlayList = async(id)=>{
	const res = await apiGetPlayList(id,20,0)
	// console.log(res.data.songs);
	list.value = res.data.songs
}

const getPlayListDetail = async(id) =>{
	const res = await apiGetPlayListDetail(id)
	// console.log(res.data.playlist);
	info.value = res.data.playlist
}

const showPlayer=(id)=>{
	//展示播放器
	//传递id
	store.commit('changeIsShowPlayer',true)
	store.commit('changeCurrentPlayId',id)
}
</script>

<style lang="scss">
.songs-list {
	// height: 100%;
	// overflow: scroll;
	.head {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		z-index: 9999;
	}
	.header {
		height: 100rpx;
		width: 100%;
		position: fixed;
		// #ifndef H5
		top: 80rpx;
		// #endif
		// #ifdef H5
		top: 0;
		// #endif
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 15rpx;
		box-sizing: border-box;
		color: #fff;
		background-color: #588b77;
		z-index: 999;
	}
	.list-hd {
		background: linear-gradient(to bottom, #588b77, #79af9a);
		padding: 100rpx 30rpx 40rpx;
		.hd-info {
			display: flex;
			margin-top: 20rpx;
			.pic {
				width: 160rpx;
				height: 160rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.2);
				image {
					width: 100%;
					height: 100%;
					border-radius: 8px;
				}
			}
			.desc {
				margin-left: 20rpx;
				color: #fff;
				.user {
					display: flex;
					align-items: center;
					margin-top: 10rpx;
					.avatar {
						width: 50rpx;
						height: 50rpx;
						image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.nickname {
						margin: 0 10rpx;
						font-size: 24rpx;
					}
				}
			}
		}
		.hd-status {
			display: flex;
			margin-top: 70rpx;
			.btn {
				flex: 1;
				text-align: center;
				background-color: rgba(255, 255, 255, 0.3);
				color: #fff;
				border-radius: 50rpx;
				padding: 10rpx 0;
				font-size: 28rpx;
				margin: 0 10rpx;
			}
		}
	}
	.list-bd {
		background-color: #fff;
		padding: 0 30rpx;
		position: relative;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		top: -20rpx;
		// overflow: hidden;
		.bd-title {
			display: flex;
			align-items: center;
			padding: 30rpx 0;
			position: -webkit-sticky;
			position: sticky;
			top: 100rpx;
			background-color: #fff;
			.iconfont{
				color:#d81e06;
				margin-right: 8rpx;
			}
			.count {
				font-size: 20rpx;
			}
		}
		.bd-content {
			.item {
				display: flex;
				align-items: center;
				margin-bottom: 40rpx;
				.num {
					flex: 0 0 50rpx;
					color: #8b8f9b;
				}
				.icon-more {
					flex: 0 0 30rpx;
					color: #8b8f9b;
					font-size: 40rpx;
					font-weight: bold;
				}
				.song-desc {
					flex: 1;
					.name {
						font-size: 28rpx;
					}
					.author {
						font-size: 20rpx;
						color: #8b8f9b;
						margin-top: 4rpx;
					}
				}
			}
		}
	}
}
</style>
