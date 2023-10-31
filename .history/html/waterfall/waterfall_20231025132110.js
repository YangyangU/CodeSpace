// 图片布局函数，根据屏幕宽度计算每行可容纳的图片数量，然后将图片摆放在合适的位置
// 参数：parent - 包含图片的容器的ID，content - 图片元素的类名
function imgLocation(parent, content) { 
  // 获取父容器和所有图片元素
  var cparent = document.getElementById(parent);
  var ccontent = getChildElement(cparent, content);
  // 计算每张图片的宽度，以及每行可容纳的图片数量
  var imgWidth = ccontent[0].offsetWidth;
  var num = Math.floor(document.documentElement.clientWidth / imgWidth);
  // 设置父容器的宽度，以适应图片布局
  cparent.style.cssText = `width: ${imgWidth * num}px`;

  // 用于存储每列的高度
  var BoxHeightArr = [];
  for (var i = 0; i < ccontent.length; i++) {
      if (i < num) {
          // 第一行图片的高度
          BoxHeightArr[i] = ccontent[i].offsetHeight;
      } else { 
          // 需要操作的图片
          var minHeight = Math.min.apply(null, BoxHeightArr);
          // 找到最矮列的索引
          var minIndex = BoxHeightArr.indexOf(minHeight);
          
          // 设置图片位置为绝对定位，放置在最矮列的下方
          ccontent[i].style.position = 'absolute';
          ccontent[i].style.top = minHeight + 'px';
          ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';
          // 更新最矮列的高度
          BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
      }
  }
  console.log(num);
}

// 获取指定父容器中指定类名的所有子元素
// 参数：parent - 父容器元素，content - 子元素的类名
function getChildElement(parent, content) {
  var contentArr = [];
  var allContent = parent.getElementsByTagName('*');
  for (var i = 0; i < allContent.length; i++) {
      if (allContent[i].className == content) {
          // 如果子元素的类名与指定类名匹配，将其加入数组
          contentArr.push(allContent[i]);
      }
  }
  return contentArr;
}

// 调用图片布局函数，传入父容器ID和图片元素类名，实现瀑布流布局
imgLocation('container', 'box');
console.log(imgLocation);

