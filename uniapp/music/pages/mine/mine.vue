<template>
	<scroll-view scroll-y="true" class="mine" @scroll="handleScroll" data-mine="mineWrap">
		<wyheader icon="more-filled" :bgColor="headerBgColor" :needBox="false" :fontColor='headerFontColor'>
			<template v-slot:content>
				<view>我的音乐</view>
			</template>
		</wyheader>
		
		<menuLeft></menuLeft>
		
		<view class="mine-bd">
			<view class="bg" :style="{backgroundImage:`url(${state.info.profile&&state.info.profile.backgroundUrl})`}"></view>
			<view class="user">
				<view class="pic">
					<image :src="state.info.profile&&state.info.profile.avatarUrl" mode="aspectFill"></image>
				</view>
				
				<view class="user-online" v-if="isLogin">
					<view class="username">
						<text>{{state.info.profile&&state.info.profile.nickname}}</text>
					</view>
					<view class="user-desc">
						<view class="user-desc-horoscope">
							<text class="iconfont icon-boy"></text>
							<text>{{state.info.profile&&formateTime(state.info.profile.birthday).ageLever}}后</text>
							<text>{{state.info.profile&&formateTime(state.info.profile.birthday).horoscope}}座</text>
						</view>
						<view class="user-desc-address">
							<text>江西 南昌</text>
						</view>
						<view class="user-desc-age">
							<text>村龄{{state.info.profile&&~~(state.info.createDays/365)}}年</text>
						</view>
					</view>
					<view class="user-wyInfo">
						<view class="wyInfo-gz">
							<text>{{state.info.profile&&state.info.profile.follows}}</text> 关注
						</view>
						<view class="wyInfo-fs">
							<text>{{state.info.profile&&state.info.profile.followeds}}</text> 粉丝
						</view>
						<view class="wyInfo-dj">
							<text>Lv.{{state.info.profile&&state.info.level}}</text> 等级
						</view>
						<view class="wyInfo-sj">
							<text>{{state.info.profile&&state.info.listenSongs}}时</text> 听歌
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
				<view class="list-sort">
					<view class="tab" v-show="showTab[0]">
						<view class="sort-item" v-for="(item,index) in state.list" :key="index" @click="goSongsList">
							<view class="pic">
								<image :src="item.coverImgUrl" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="title">
									{{item.name}}
								</view>
								<view class="detail">
									<text v-if="index>0">歌单</text>
									<text>{{item.trackCount}}首</text>
									<text v-if="index==0">{{item.playCount}}次播放</text>
									<text v-if="index>0">{{item.creator.nickname}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="tab" v-show="showTab[1]">
						这里是播客
					</view>
					<view class="tab" v-show="showTab[2]">
						这里是动态
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script setup>
import {computed, reactive,ref,watch} from 'vue';
import {useStore} from 'vuex'
import {apiGetUserInfo,apiGetUserSongsList} from '@/api/mine.js'
import {onLoad} from '@dcloudio/uni-app'
import {formateTime} from '@/utils/index.js'

const store = useStore()
const state = reactive({
	info:{},
	list:[]
})
const activeNum = ref(0)
const listNav = ['音乐','播客','动态']
const nav_bottom = ref(750 / 3 / 2 + 'rpx')
const headerBgColor = ref('rgba(255,255,255,0)')
const headerFontColor = ref('rgba(255,255,255,1)')
const showTab = ref([true,false,false])

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

//获取用户信息
const getUserInfo = async()=>{//先发拿到id的接口
	const res = await apiGetUserInfo(store.state.userInfo.userId)
	// console.log(res.data);
	state.info = res.data
}

//获取用户歌单
const getUserSongsList = async()=>{
	const res = await apiGetUserSongsList(store.state.userInfo.userId)
	// console.log(res.data.playlist);
	state.list = res.data.playlist
}

watch(
	()=>store.state.userInfo.userId,
	(newVal,oldVal)=>{//用watch监听仓库,拿到用户id再请求
		if(newVal){
			getUserInfo()
			getUserSongsList()
		}
},{immediate:true})

const changeNav = (index)=>{
	activeNum.value = index
	nav_bottom.value = 750 / 3 / 2 *(( 2 * index ) + 1) + 'rpx' //移动到的位置
	
	showTab.value = [false,false,false]
	showTab.value[index] = true
}

let bgOpacity = 0
let fontColor = 255
const handleScroll = (e)=>{ //0 - 340
	console.log(e.detail.scrollTop);
	let top = e.detail.scrollTop
	if(top<=340){
		bgOpacity = (top/340).toFixed(1)
	}else{
		bgOpacity = 1
	}
	if(top>=200){
		fontColor = 0
	}else{
		fontColor = 255
	}
	
	headerBgColor.value = `rgba(255,255,255,${bgOpacity})`;
	headerFontColor.value = `rgba(${fontColor},${fontColor},${fontColor})`
}

const goSongsList = () =>{
	uni.navigateTo({
		url:"/pages/songsList/songsList"
	})
}

</script>

<style lang="scss" scoped>
.mine{
	height: 100%;
}
.mine-bd {
	height: 100%;
	box-sizing: border-box;
	padding: 280rpx 30rpx 0rpx;
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
		min-height: 400rpx;
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
					margin-left: 12rpx;
					&.iconfont {
						color: #00aaff;
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
		// overflow: hidden;//会让黏性失效
		.nav{
			border-top-left-radius:15px ;
			border-top-right-radius: 15px;
			display: flex;
			position: sticky;//黏性
			top: 100rpx;
			background-color: #fff;
			z-index: 999;
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
		.list-sort{
			padding: 40rpx 30rpx;
			.sort-item{
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
				.pic{
					height: 100rpx;
					width: 100rpx;
					margin-right: 20rpx;
					image{
						height: 100%;
						width: 100%;
						border-radius: 8px;
					}
				}
				.desc{
					.title{
						color: #3d4251;
						font-size: 28rpx;
					}
					.detail{
						color: #6e747b;
						font-size: 22rpx;
						text{//伪元素加·
							&::after{
								content:'·';
								margin:0 4rpx;
							}
							&:last-child::after{
								content:''
							}
						}
					}
				}
			}
		}
	}
}
</style>
