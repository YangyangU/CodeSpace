var front = document.getElementsByClassName('front-cover')[0];
var hold=false;
front.onmousedown = function(){
    hold=true;
}
window.onmouseup = function(){
    hold=false;
}
window.onmousemove = function(){
    if(hold){
        
    }
}
console.log(front);