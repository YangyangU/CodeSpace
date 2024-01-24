<template>
	<view class="mine">
		<wyheader icon="more-filled" bgColor="transparent" :needBox="false" fontColor='#fff'>
			<template v-slot:content>
				<view>我的音乐</view>
			</template>
		</wyheader>
		
		<menuLeft></menuLeft>
		
		<view class="mine-bd" v-if="state.info.profile">
			<view class="bg" :style="{backgroundImage:`url(${state.info.profile.backgroundUrl})`}"></view>
			<view class="user">
				<view class="pic">
					<image :src="state.info.profile.avatarUrl" mode="aspectFill"></image>
				</view>
				
				<view class="user-online" v-if="isLogin">
					<view class="username">
						<text>{{state.info.profile.nickname}}</text>
					</view>
					<view class="user-desc">
						<view class="user-desc-horoscope">
							<text class="iconfont icon-boy"></text>
							<text>{{formateTime(state.info.profile.birthday).ageLever}}后</text>
							<text>{{formateTime(state.info.profile.birthday).horoscope}}座</text>
						</view>
						<view class="user-desc-address">
							<text>江西 南昌</text>
						</view>
						<view class="user-desc-age">
							<text>村龄{{~~(state.info.createDays/365)}}年</text>
						</view>
					</view>
					<view class="user-wyInfo">
						<view class="wyInfo-gz">
							<text>{{state.info.profile.follows}}</text>关注
						</view>
						<view class="wyInfo-fs">
							<text>{{state.info.profile.followeds}}</text>粉丝
						</view>
						<view class="wyInfo-dj">
							<text>Lv.{{state.info.level}}</text>等级
						</view>
						<view class="wyInfo-sj">
							<text>{{state.info.listenSongs}}时</text>听歌
						</view>
					</view>
					<view class="user-list">
						<view class="zj btn">
							<text class="iconfont icon-zuijin"></text>
							<text class="text">最近</text>
						</view>
						<view class="bd btn">
							<text class="iconfont icon-dakaibendi"></text>
							<text class="text">本地</text>
						</view>
						<view class="yp btn">
							<text class="iconfont icon-shangchuanyunpan"></text>
							<text class="text">云盘</text>
						</view>
						<view class="yg btn">
							<text class="iconfont icon-yigou"></text>
							<text class="text">已购</text>
						</view>
						<view class="fl btn">
							<text class="iconfont icon-Category"></text>
						</view>
					</view>
				</view>
				
				<view class="user-outline" v-else  @click="login">
					<text>立即登录</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view>
			
			<view class="list">
				<view class="nav">
					<view class="nav-item" @click="changeNav(index)" :class="{'active':activeNum === index}" v-for="(item,index) in listNav" :key="index">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
import { computed, reactive,ref,watch } from 'vue';
import {useStore} from 'vuex'
import {aipGetUserInfo} from '@/api/mine.js'
import {onLoad} from '@dcloudio/uni-app'
import {formateTime} from '@/utils/index.js'

const store = useStore()
const state = reactive(
{
	info:{},
})
const activeNum = ref(0)
const listNav = ['音乐','播客','动态']
const nav_bottom = ref(750 / 3 / 2 + 'rpx')

const isLogin = computed(()=>{
	return store.state.loginState
})

const login = () =>{//跳页面
	uni.reLaunch({
		url:'/pages/login/login'
	})
}
onLoad(()=>{
	// getUserInfo() 不应该在这，而是在获取到id后再发请求，用watch监听仓库
})

const getUserInfo = async()=>{//先发拿到id的接口
	const res = await aipGetUserInfo(store.state.userInfo.userId)
	// console.log(res.data);
	state.info = res.data
}

watch(
	()=>store.state.userInfo.userId,
	(newVal,oldVal)=>{//用watch监听仓库
		if(newVal){
			getUserInfo()
		}
},{immediate:true})

const changeNav = (index)=>{
	activeNum.value = index
	nav_bottom.value = 750 / 3 / 2 *(( 2 * index ) + 1) + 'rpx' //移动到的位置
}

</script>

<style lang="scss" scoped>
.mine-bd {
	padding: 280rpx 30rpx 80rpx;
	position: relative;
	.bg{
		background-color: #93969d;
		height: 800rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		background-size: cover;
		z-index: -1;
	}
	.user {
		.pic {
			width: 120rpx;
			height: 120rpx;
			margin: 0 auto;
			image {
				border: 1rpx solid #fff;
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.user-outline {
			text-align: center;
			margin: 30rpx 0;
			color: #fff;
			:deep(.uni-icons) {
				color: #fff !important;
			}
		}
		.user-online {
			text-align: center;
			color: #fff;
			.username {
				margin: 40rpx 0 16rpx 0;
				font-size: 40rpx;
				font-weight: 500;
			}
			.user-desc {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 24rpx;
				text {
					margin-left: 10rpx;
					&.iconfont {
						color: #72939f;
					}
				}
			}
			.user-wyInfo {
				display: flex;
				justify-content: center;
				font-size: 24rpx;
				margin: 40rpx 0;
				color: #eee;
				view {
					margin-left: 40rpx;
					&:first-child {
						margin-left: 0;
					}
					text {
						font-size: 28rpx;
						color: #fff;
					}
				}
			}
			.user-list {
				display: grid;
				grid-template-columns: 2fr 2fr 2fr 2fr 1fr;
				grid-column-gap: 10rpx;
				.btn {
					padding: 10rpx 0;
					font-size: 24rpx;
					background-color: rgba(255, 255, 255, 0.1);
					border-radius: 10rpx;
					.iconfont {
						font-size: 24rpx;
						margin-right: 4rpx;
					}
				}
			}
		}
	}
	.list{
		position: relative;
		top: -30rpx;
		background-color: #fff;
		margin-left: -30rpx;
		margin-right: -30rpx;
		margin-top:80rpx ;
		border-top-left-radius:15px ;
		border-top-right-radius: 15px;
		.nav{
			display: flex;
			.nav-item{
				flex:1;
				text-align: center;
				padding: 30rpx 0;
				color: #666;
				&.active{//点击实现下滑红线
					color: #000;
					position: relative;
					
				}
			}
			//伪类实现下划线
			&::after{//伪元素加在nav下面实现平移
				content:'';
				display: block;
				width: 30rpx;
				height: 6rpx;
				background-color: #d81e06;
				position: absolute;
				left: v-bind(nav_bottom);//用js计算位置
				transform: translateX(-50%);
				bottom: 15rpx;
				border-radius: 10px;
				transition: all 0.5s ease;
			}
		}
	}
}
</style>
