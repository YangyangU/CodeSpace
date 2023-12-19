//自动识别手机屏幕设置根字体大小

//自执行函数  也可以在最后自己调用
(function(doc,win){ // 源码不干扰其他js文件
    var docEL = doc.documentElement; //获取页面根节点html
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function(){
        var clientWidth = docEL.clientWidth
        if(!clientWidth) return 
        docEL.style.fontSize = 20 * (clientWidth / 320) + 'px' //参考iphone5手机屏幕宽度
    }

    win.addEventListener(resizeEvt, recalc);//设备尺寸变更实时重置根子体

    doc.addEventListener('DOMContentLoaded', recalc);

})(document, window)//整个文档，浏览器