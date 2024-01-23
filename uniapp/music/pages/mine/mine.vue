<template>
	<view class="mine">
		<wyheader icon="more-filled" bgColor="transparent" :needBox="false">
			<template v-slot:content>
				<view>添加状态</view>
			</template>
		</wyheader>
		
		<menuLeft></menuLeft>
		
		<view class="mine-bd">
			<view class="user">
				<view class="pic">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				
				<view class="user-online" v-if="isLogin">
					已经登录
				</view>
				
				<view class="user-outline" v-else>
					<text>立即登录</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
import {useStore} from 'vuex'

const store = useStore()
const isLogin = computed(()=>{
	return store.state.loginState
})
</script>

<style lang="scss">
.mine-bd{
	padding: 200rpx 30rpx 40rpx;
	background-color: #93969d;
	.user{
		
		.pic{
			width: 120rpx;
			height: 120rpx;
			margin: 0 auto;
			image{
				border: 1rpx solid #fff;
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.user-outline{
			text-align: center;
			margin: 30rpx 0;
			color:#fff;
			:deep(.uni-icons){
				color:#fff !important;
			}
		}
	}
}
</style>
