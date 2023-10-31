#### 企业级界面开发规则

-`html`  `css`   `js`  功能分离

-`css`  框架

​	-`reset.css`

​		去除浏览器间的样式区别

​		浏览器  edge  chrome

​		文档流  body开始 流体性布局

​		盒子在页面上占了多少？

​		盒子模型 = content + padding + border + margin	

​		2种盒子模型

​		IE盒模型 = content(自动缩放) + padding + border + margin 

​	-`base.css ` 通用样式

-`css`命名套路

​	-page

​		__ `hd`      __ `bd`     __ `ft`

​	-`btn`  `panel`  `cell`

​	-框架组件  `BEM`



-`css` +  兄弟选择器

-`google`  图片格式

​	`base64` 图片   小一点简单的  在`CSS`文件里

​	`jpg|png|jpeg|wtt|webp`   比较大  带来请求的并发

 