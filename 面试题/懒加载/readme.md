# 懒加载
不加载就先不给src属性先不给值
判断图片有没有进入可视区域，有的话就将其data-original的值赋给src
getBoundingClientRect() 获取容器的几何信息