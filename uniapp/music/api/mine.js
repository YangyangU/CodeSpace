import baseUrl from './request.js'

//我的页面所有接口

//获取用户信息
export const apiGetUserInfo=(uid)=>{
	return uni.request({
		url:`${baseUrl}/user/detail`,
		method:'GET',
		data:{
			uid:uid
		}
	})
}

//获取用户歌单
export const apiGetUserSongsList=(uid)=>{
	return uni.request({
		url:`${baseUrl}/user/playlist`,
		method:'GET',
		data:{
			uid:uid
		}
	})
}