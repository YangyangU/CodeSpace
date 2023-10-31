//读取用户屏幕第一行放了多少张图
//操作下一张图，找到上一行最矮的高度，将图片排放到其下方

function imgLocation(){//当前有多少张图片要摆放 
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.childEWidth
    cparent.style.cssText=`width: ${imgWidth * num }px`
}
function getChildElement(parent, content) {
    var contentArr = []
    var allContent = parent.getElementsByTagName('*')
    for (var i = 0; i < allContent.length; i++) {
      if (allContent[i].className == content) {
        contentArr.push(allContent[i])
      }
    }
  
    return contentArr
    console.log(contentArr);
  }