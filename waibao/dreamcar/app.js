// 应用

// Page() 页面
// 花括号内配置
App({
  globalData:{
    
  },
  onLaunch(){
    //在应用启动时，发送接口请求
    // console.log('应用启动了');
    wx.request({//发送请求
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response)=> {
        // console.log(response);
        //前后端接口链条
        Object.assign(this.globalData,response.data)
        //向第一个元素添加，后一个元素的数据
        console.log(this,'------');
      }
    })
  },
})