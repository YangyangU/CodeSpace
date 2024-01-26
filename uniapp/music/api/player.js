import baseUrl from './request.js'

//获取播放音乐url
export const apiGetSongUrl = (id) =>{
	return uni.request({
		url:`${baseUrl}/song/url/v1`,
		method:'GET',
		data:{
			id:id,
			level:'jymaster'
		}
	})
}


export const apiGetSongDetail = (id) =>{
	return uni.request({
		url:`${baseUrl}/song/detail`,
		method:'GET',
		data:{
			ids:id,
		}
	})
}
