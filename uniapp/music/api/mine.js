import baseUrl from './request.js'

//我的页面所有接口
export const aipGetUserInfo=(uid)=>{
	return uni.request({
		url:`${baseUrl}/user/detail`,
		method:'GET',
		data:{
			uid:uid
		}
	})
}