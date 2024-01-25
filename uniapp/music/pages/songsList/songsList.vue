<template>
	<view class="songs-list">
		<!-- #ifndef  H5 -->
		<view class="head"></view>
		<!-- #endif -->
		<view class="header">
			<uni-icons type="left" size="22" color="#fff"></uni-icons>
			<view class="title">歌单</view>
			<uni-icons type="more-filled" size="22" color="#fff"></uni-icons>
		</view>
		<view class="list-hd">
			<view class="hd-info">
				<view class="pic boxShadow">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="desc">
					<view class="title">我喜欢的音乐</view>
					<view class="user">
						<view class="avatar">
							<image src="../../static/icon/wangyiyun-active.png" mode="aspectFill"></image>
						</view>
						<view class="nickname">阳阳</view>
						<uni-icons type="right" size="15" color="#fff"></uni-icons>
					</view>
				</view>
			</view>
			<view class="hd-status">
				<view class="share btn">
					<uni-icons type="redo-filled" size="22" color="#fff"></uni-icons>
					<text>分享</text>
				</view>
				<view class="commit btn">
					<uni-icons type="chat-filled" size="22" color="#fff"></uni-icons>
					<text>评论</text>
				</view>
				<view class="collection btn">
					<uni-icons type="folder-add-filled" size="22" color="#fff"></uni-icons>
					<text>收藏</text>
				</view>
			</view>
		</view>
		<view class="list-bd">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.songs-list{
	background: linear-gradient(to bottom, #588b77, #79af9a);
	.head{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		z-index: 9999;
	}
	.header{
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
	}
	.list-hd{
		padding: 100rpx 30rpx 40rpx;
		.hd-info{
			display: flex;
			margin-top: 20rpx;
			.pic{
				width: 160rpx;
				height: 160rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.2);
				image{
					width: 100%;
					height: 100%;
					border-radius: 8px;
				}
			}
			.desc{
				margin-left: 20rpx;
				color: #fff;
				.user{
					display: flex;
					align-items: center;
					margin-top: 10rpx;
					.avatar{
						width: 50rpx;
						height: 50rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.nickname{
						margin: 0 10rpx;
						font-size: 24rpx;
					}
				}
			}
		}
		.hd-status{
			display: flex;
			margin-top: 70rpx;
			.btn{
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
}
</style>
