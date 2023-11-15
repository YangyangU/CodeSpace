// App -> Page的桥梁

const app = getApp() //微信提供API
Page({
  // 页面数据
  data:{
    // user:{}
    slides:null,
    entities:null,
    
      pic:'https://cdn.ferrari.com/cms/network/media/img/resize/649ec85da3933d0095d1203f-ferrari-models-menu-2023-cards-sf90-stradale?width=800&height=450'
    
  },
  // 生命周期 
  onLoad(){
    // this -> Page 类
    // console.log(app,'页面显示了');
    //响应式的页面 热更新
    setTimeout(() =>{
      // this?
      this.setData({
        slides:app.globalData.slides,
        entities:app.globalData.vehicles
      })
    },2000)
  },
  onReady(){
    console.log('Ready Go');
  }
})