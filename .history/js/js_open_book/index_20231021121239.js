var front = document.getElementsByClassName('front-cover')[0];
var hold=false;
var clamp = function(val,min,max) {
    return Math.max(min,Math.min(max,val)
}
//鼠标按下
front.onmousedown = function(){
    hold=true;
}
//鼠标松开
window.onmouseup = function(){
    hold=false;
}
//判断是否按下
window.onmousemove = function(){
    if(hold){//修改左半本书的角度，卡片旋转，阴影倾斜
        var deg = 
        
    }
}