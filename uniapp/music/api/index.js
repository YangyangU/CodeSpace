import baseUrl from './request.js'

//首页的接口请求
export const apiGetBanner = (data) =>{
	return uni.request({
		url:baseUrl + '/banner',
		method:'GET',
		data:data
	})
}

export const apiGetBall = ()=>{
	return uni.request({
		url:baseUrl + '/homepage/dragon/ball',
		method:'GET'
	})
}

export const apiGetRecommendList = ()=>{//推荐歌单
	return uni.request({
		url:baseUrl + '/recommend/resource',
		method:'GET'
	})
}