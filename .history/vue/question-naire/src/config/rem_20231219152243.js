//自动识别手机屏幕

//自执行函数  也可以在最后自己调用
(function(doc,win){ // 源码不干扰其他js文件
    var docEL = doc.documentElement; //获取页面根节点html
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
})(document, window)//整个文档，浏览器