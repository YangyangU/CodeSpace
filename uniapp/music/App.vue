<script>
	import baseUrl from '@/api/request.js'
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			//判断用户是否登录，存在本地存储，用this访问store
			let key = uni.getStorageSync('cookie')
			if(!key){
				// console.log(this.$store);
				this.$store.commit('changeLoginState',false)
				return 
			}
			uni.request({
				url:baseUrl + '/login/status',
				data:{
					cookie:key
				},
				success:(res)=>{
					// console.log(res.data.data.account.id);//游客id
					let id = res.data.data.account.id
					if(id){
						this.$store.commit('changeLoginState',true)//已登录，修改store信息
						this.getUser(key)
					}
				}
			})
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			getUser(key){
				if(!key) return
				uni.request({
					url:baseUrl + '/user/account',
					data:{
						cookie:key
					},
					success:(res)=>{
						// console.log(res);
						let nickname = res.data.profile && res.data.profile.nickname
						let id = res.data.profile && res.data.profile.userId
						let avatar = res.data.profile && res.data.profile.avatarUrl
						this.$store.commit('getUserInfo',{nickname,userId:id,avatar})
					}
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url('http://at.alicdn.com/t/c/font_4416383_527ai7giiz.css');
	*{
		margin: 0;
		padding: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	#app{
		height: 100%;
	}
	uni-page-body{
		height: 100%;
		overflow-y: scroll;
	}
	.boxShadow{
		position: relative;
		z-index: 1;
		perspective: 400px;
		border-radius: 8px;
		transform-style: preserve-3d;
	}
	.boxShadow::after{
		content: '';
		display: block;
		width: 90%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: -16rpx;
		left: 5%;
		background-color: #6e9d8b;
		border-radius: 8px;
		transform: translateZ(-30rpx);
	}
</style>
