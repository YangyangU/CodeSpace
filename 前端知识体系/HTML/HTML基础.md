# 语义化
根据内容选择标签，用最恰当的标签来标记内容
## 好处
1. 方便阅读
2. 方便浏览器解析
3. 方便团队开发
4. 方便搜索引擎优化
## 常见的语义化标签
1. header
2. nav
3. main
4. article
5. section
6. aside
7. footer

# CSS Sprites
将多张小图片合并成一张大图片，然后利用CSS的background-position属性来定位显示图片的某一部分
## 优点
1. 减少HTTP请求，提高页面加载速度
2. 减少图片的字节，提高页面加载速度
3. 图片合并后，只需要加载一次，减少服务器压力
## 缺点
1. 图片合并后，如果需要修改图片，需要重新合并，比较麻烦
2. 需要精确测量每一个图片的位置，比较麻烦

# BFC
块级格式化上下文，是一个独立的渲染区域，只有块级元素和浮动元素参与渲染，不会影响到外面的元素
## 创建BFC
1. float不为none
2. position为absolute或fixed
3. display为inline-block、table-cell
4. overflow不为visible
## 作用
1. 清除浮动
2. 解决父容器高度塌陷 - 子元素设置浮动，父容器高度塌陷
3. 解决外边距重叠 - 兄弟元素(底部元素设置浮动) / 父元素(父元素overflow:hidden)
