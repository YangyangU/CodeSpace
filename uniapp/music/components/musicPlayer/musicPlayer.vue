<template>
	<view class="player" v-if="store.state.isShowPlayer">
		<view class="mini-player">
			<view class="pic">
				<image :src="state.pic"></image>
			</view>
			<view class="song">
				<text class="name">{{state.name}}</text>
				<text class="author"> - {{state.author}}</text>
			</view>
			<view class="player-control">
				<view class="iconfont icon-bofanganniu"></view>
				<view class="iconfont icon-16gf-playlistMusic2"></view>
			</view>
		</view>
		
		<view class="max-player">
			<!-- 大播放页面 -->
		</view>
	</view>
</template>

<script setup>
import {apiGetSongUrl,apiGetSongDetail} from '@/api/player.js'
import {reactive, watch} from 'vue';
import {useStore} from 'vuex'

const store = useStore()

const state = reactive({
	url:'',
	name:'',
	author:'',
	time:'',
	pic:'',
	method:'pause'
})

defineProps({
	bottom: {
		type: String,
		default: '0rpx'
	}
})

const getSongUrl = async(id)=>{
	const res = await apiGetSongUrl(id)
	// console.log(res.data.data[0].url);
	state.url = res.data.data[0].url
	
	// 创建内置播放器
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	innerAudioContext.src = state.url
	innerAudioContext.onPlay(() => {
	  console.log('开始播放');
	});
	innerAudioContext.onError((res) => {
	  console.log(res.errMsg);
	  console.log(res.errCode);
	});
}

const getSongDetail = async(id)=>{
	const res = await apiGetSongDetail(id)
	// console.log(res.data.songs[0]);
	state.name = res.data.songs[0].al.name
	state.author = res.data.songs[0].ar.map((item)=>item.name).join('/')
	state.pic = res.data.songs[0].al.picUrl
	state.time = res.data.songs[0].dt
} 

//监听有没有传歌曲
watch(
	()=>store.state.currentPlayId,
	(newVal,oldVal)=>{
		// console.log(newVal,oldVal);
		getSongUrl(newVal)
		getSongDetail(newVal)
	}
)

</script>

<style lang="scss">
.player{
	position: fixed;
	bottom: v-bind(bottom);
	width: 100%;
	height: 90rpx;
	background-color: #fff;
	box-shadow: 0 -6rpx 10rpx #eee;
	.mini-player{
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 30rpx;
		.pic{
			flex: 0 0 85rpx;
			width: 85rpx;
			height: 85rpx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 50%;
				border: 12rpx solid #000;
				box-sizing: border-box;
			}
		}
		.song{
			flex: 1;
			margin: 0 20rpx;
			.name{
				font-size: 28rpx;
				color: #333;
			}
			.author{
				font-size: 26rpx;
				color: #999;
			}
		}
		.player-control{
			flex: 0 0 120rpx;
			display: flex;
			justify-content: space-between;
			.iconfont{
				font-weight: bold;
				font-size: 42rpx;
			}
			.icon-bofanganniu{
				width: 40rpx;
				height: 40rpx;
				border: 1px solid #aaa;
				border-radius: 50%;
				position: relative;
				&::before{
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
	}
}
</style>