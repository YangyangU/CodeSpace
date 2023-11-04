// window.onload = function(){}//执行完html再执行js，我们现在把导入放到最后就可以不用写


//历史弹幕
let data = [
    {value:'第一',color:'red',fontSize:22,time:1},
    {value:'我是东华理工大学软件学院徐阳阳',color:'blue',fontSize:22,time:1},
    {value:'我是东华理工大学软件学院徐阳阳',color:'red',fontSize:22,time:2},
    {value:'我是东华理工大学软件学院徐阳阳',color:'green',fontSize:22,time:3},
    {value:'我是东华理工大学软件学院徐阳阳',color:'yellow',fontSize:22,time:4},
    {value:'我是东华理工大学软件学院徐阳阳',color:'black',fontSize:22,time:5},
    {value:'我是东华理工大学软件学院徐阳阳',color:'pink',fontSize:22,time:6},
    {value:'我是东华理工大学软件学院徐阳阳',color:'red',fontSize:22,time:7},
    {value:'我是东华理工大学软件学院徐阳阳',color:'blue',fontSize:22,time:8},
]
//整理弹幕数据
CanvasBarrage.prototype.render = function(){
    //清除画布
    this.clear()
    if(!this.isPaused){//播放状态
        requestAnimationFrame()//定时器，16.7毫秒
    }
}
function CanvasBarrage(canvas,video,opts={}){
    if(!canvas||!video) return 

    this.video = video
    this.canvas = canvas
    //设置canvas宽高和video保持一致
    this.canvas.width = video.width
    this.canvas.height = video.height
    //获取画布
    this.ctx = canvas.getContext('2d')
    //初始化弹幕
    let defOpts = {
        color:'#e91e63',
        fontSize: 20,
        speed: 1.5,//速度
        opacity: 0.5,//透明度
        data:[]//time和value不需要初始值，没输入就不执行
    }
    Object.assign(this,defOpts,opts)//后面覆盖并合并前面

    //视频播放，弹幕出现
    this.isPaused = true
    //获取到所有的弹幕
    this.barrages = data
    //移动弹幕，控制x坐标不断减小
    this.render()

}

// let canvas = document.getElementById('canvas');
// new CanvasBarrage(canvas,video,{value:'xxx',color:'blue',time:5})