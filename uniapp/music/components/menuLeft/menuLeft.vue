<template>
	<view class="menu-left" :class="isShow ? 'show' : 'hide'" >
		<view class="head">
			
		</view>
		<!-- userInfo -->
		<view class="menu-hd">
			<view class="user-info">
				
				<view class="avatar">
					<image class="pic" src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="username">
					<text>阳阳</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view>
			<!-- 扫一扫 -->
			<view class="qricon">
				<uni-icons type="scan" size="30"></uni-icons>
			</view>
		</view>
		<view class="bd">
			hello
		</view>
	</view>
	<view class="menu-mask" @click="hideMenu" v-show="isShow"></view>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

// console.log(store);


const isShow = computed(()=>{
	return store.state.isShowMenu
})

const hideMenu = () =>{
	// isShow.value = false
	store.commit('changeIsShowMenu',false)
}
</script>

<style lang="scss" scoped>
	.head{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		z-index: 999;
	}
.menu-left{
	position: fixed;
	top: 80rpx;
	z-index: 9999;
	width: 620rpx;
	height: 100%;
	padding: 30rpx;
	box-sizing: border-box;
	background-color: #fff;
	// box-shadow: 5px 0 20rpx #eee;
	transition: all 0.5s ease;
	&.show{
		left: 0;
	}
	&.hide{
		left: -620rpx;
	}
	.menu-hd{
		display: flex;
		justify-content: space-between;
		.user-info{
			display: flex;
			align-items: center;
			.avatar{
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				overflow:hidden;
				.pic{
					width: 100%;
					height: 100%;
				}
			}
			.username{
				margin-left: 20rpx;
			}
		}
	}
}
.menu-mask{
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0,0,0,0.5);
	z-index: 1000;
}
</style>