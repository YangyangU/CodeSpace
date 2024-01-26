import baseUrl from './request.js'

//根据id渲染歌单列表
export const apiGetPlayList = (id, limit, offset) => {
	return uni.request({
		url: `${baseUrl}/playlist/track/all`,
		method: 'GET',
		data: {
			id: id,
			limit: limit,
			offset: offset
		}
	})
}

//通过id获取歌单详情
export const apiGetPlayListDetail = (id) => {
	return uni.request({
		url: `${baseUrl}/playlist/detail`,
		method: 'GET',
		data: {
			id: id
		}
	})
}