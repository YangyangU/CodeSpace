import {createStore} from 'vuex'

export default createStore({
	state:{
		isShowMenu:true//控制菜单显示和隐藏
	},
	mutations:{
		changeIsShowMenu(state,flag){
			state.isShowMenu = flag
		}
	}
})