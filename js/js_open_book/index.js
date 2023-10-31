var front = document.getElementsByClassName('front-cover')[0];
var book = document.getElementsByClassName('book')[0];
var card = document.getElementsByClassName('card')[0];
var shadow = document.getElementsByClassName('shadow')[0];
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
        var bookdeg=deg /8 +60
        book.style.transform = `rotateX(${bookdeg}deg)`        
        var carddeg=deg /2
        card.style.transform = `rotateX(${carddeg}deg)`        
        var shadowdeg=deg /8
        shadow.style.transform = `skew(${shadowdeg}deg)`
    }
}