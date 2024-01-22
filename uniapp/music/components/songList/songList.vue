<template>
	<view class="recommend">
		<view class="recommend-hd">
			<view class="title">
				{{title}}
			</view>
			<view class="more">
				<uni-icons type="right" size="16"></uni-icons>
			</view>
		</view>
		<view class="recommend-bd">
			<view class="recommend-bd__item" v-for="item in recommend" :key="item.id">
				<view class="item-pic">
					<image :src="item.picUrl" mode="aspectFill"></image>
				</view>
				<view class="title">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
defineProps({
	title:String,
	recommend:{
		type:Array,
	}
})
</script>

<style lang="scss" scoped>
.recommend{
	margin: 10rpx 0;
	.recommend-hd{
		display: flex;
		justify-content: space-between;
		font-size:30rpx;
		font-weight: bold;
	}
	.recommend-bd{
		display: flex;
		overflow: scroll;
		margin-top: 20rpx;
		.recommend-bd__item{
			flex: 0 0 240rpx;
			margin-left: 30rpx;
			&:nth-child(1){
				margin-left: 0;
			}
			.item-pic{
				width: 240rpx;
				image{
					border-radius: 20rpx;
					width: 100%;
					height: 240rpx;
				}
			}
			
			.title{
				font-size: 24rpx;
				// line-height: 24rpx;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				text-overflow: ellipsis;
				overflow: hidden;
				color: #2c2c2c ;
			}
		}
	}
}
</style>