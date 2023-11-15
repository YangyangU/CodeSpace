// App -> Page的桥梁

const app = getApp() //微信提供API
Page({
  // 页面数据
  data:{
    user:{}
  },
  // 生命周期 
  onLoad(){
    // this -> Page 类
    console.log(app,'页面显示了');
    //响应式的页面 热更新
    setTimeout(() =>{
      // this?
      this.setData({
        user:app.globalData.user
      })
    },2000)
  },
  onReady(){
    console.log('Ready Go');
  }
})