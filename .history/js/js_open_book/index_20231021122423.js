// var front = document.getElementsByClassName('front-cover')[0];
// var hold=false;
// var clamp = function(val,min,max) {
//     return Math.max(min,Math.min(val,max))
// }
// //鼠标按下
// front.onmousedown = function(){
//     hold=true;
// }
// //鼠标松开
// window.onmouseup = function(){
//     hold=false;
// }
// //判断是否按下
// window.onmousemove = function(e){
//     if(hold){//修改左半本书的角度，卡片旋转，阴影倾斜
//         var deg = clamp((window.innerWidth / 2 -e.x +300)/300 * -90,-180,0)
//         front.style.transform = 'rotateY(${deg}deg)'   
//     }
// }
var front = document.getElementsByClassName('front-cover')[0]
//返回一个数组
var hold = false
var clamp = function(val, min, max){
    return Math.max(min,Math.min(val,max))
}//取中间值的操作
//鼠标是否摁下
front.onmousedown = function(){
    hold = true
}
//鼠标松开
window.onmouseup = function(){
    hold = false
}
window.onmousemove = function(e){

    if(hold){
    //console.log(e.x)
    //console.log('move')
    //修改左半本书的角度,卡片旋转,阴影倾斜
    //最小为0,最大为-180
    var deg = clamp((window.innerWidth / 2 - e.x + 300)/300 * -90, -180, 0)
   // console.log(deg)
   front.style.transform = `
   rotateY(${deg}deg)
   `
   //整本书立起来 60 + deg / 8
   //卡片 deg / 2
   //阴影倾斜 百度倾斜
    }

}

console.log(front)
