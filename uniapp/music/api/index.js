import baseUrl from './request.js'

//首页的接口请求
export const apiGetBanner = (data) =>{
	return uni.request({
		url:baseUrl + '/banner',
		method:'GET',
		data:data
	})
}