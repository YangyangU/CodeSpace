var front = document.getElementsByClassName('front-cover')[0];
var hold=false;
var clamp = function(val,min,max) {
    return Math.max(min,Math.min(val,max))
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
window.onmousemove = function(e){
    if(hold){//修改左半本书的角度，卡片旋转，阴影倾斜
        var deg = clamp((window.innerWidth / 2 -e.x +300)/300 * -90,-180,0)
        front.style.transform = `rotateY(${deg}deg)`
        //整本书立起来
        book.style.transform = `rotateY(${deg}deg)`
    }
}