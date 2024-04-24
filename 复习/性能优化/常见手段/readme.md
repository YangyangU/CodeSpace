# 1.减少HTTP请求,或者使用HTTP2.0
比如登录时获取用户信息

# 2.使用服务端渲染 (让首屏加载更快,SEO更友好)

# 3.合理使用CDN

# 4.css放在头部，js放在底部 async defer

# 5.精灵图  --减少http请求

# 6.http缓存

# 7.压缩文件

# 8.懒加载 <img src='' data-src='xxxx'>
- 原生
- intersectionObserver

# 9.css字体，代替图片

# 10.webp格式图片 （更优秀的图像压缩算法）

# 11.webpack tree-sharking   打包文件名 + hash

# 12.尽量减少回流重绘
    - 不要用js直接改css
    box.style.width = '200px'
    
    .more{
        width :'200px'
    }
    box.classList.add('more')

- 如果需要对DOM执行一系列操作，先让DOM脱离文档留，再修改，在带回文档流（或者DocumentFragment）

# 13.使用事件委托
借助冒泡机制

# 14. if-else or switch-case

# 15. 避免页面卡顿

# 16. 开辟多线程 Web Worker

# 17. css选择器复杂性
    尽量给每一个标签给定类名，不要嵌套

# 尽量使用flexbox （性能好）