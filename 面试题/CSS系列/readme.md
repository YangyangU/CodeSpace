# 1. 说说你对CSS盒模型的理解
1. 是什么？
浏览器在页面布局时。将所有的元素表示为一个个矩形盒子，每一个盒子包含四个部分：
content、padding、border、margin

2. 标准盒模型
盒子总宽度 = width + padding + border + margin

减小content

3. IE盒模型
盒子总宽度 = width + margin


# 2. CSS中的选择器？说说优先级
1. id选择器
2. 类名选择器
3. 标签选择器
4. 后代选择器
5. 子级选择器
6. 相邻兄弟选择器
7. 群组选择器
8. 属性选择器
9. 伪元素选择器
10. 伪类选择器


!important > 内联 > id选择器 > 类名选择器 > 标签选择器


# 3. 说说CSS中的单位有哪些？
1. px : 像素单位，屏幕上的发光点
2. rem : 相对单位，相对于根子体大小
3. em : 相对单位，用于字体上会继承父容器的字体大小，用在它处，是相对于当前容器字体大小来定
4. vw/vh : 相对单位，相对于窗口宽高比
5. % : 相对单位，相对于父容器


# 4. 说说设备像素，CSS像素，设备独立像素，dpr，ppi之间的区别？
1. pc端 1px == 1个物理像素
2. 页面缩放比为1:1时，1px == 1个物理像素


设备像素 === 物理像素
css像素 === 1px
设备独立像素 === 分辨率
dpr(设备像素比) === 设备像素/ 设备独立像素
ppi === 像素密度

# 5. CSS中有哪些方式可以隐藏页面元素？区别是什么？
1. display: none;          脱离文档流  无法响应事件  回流重绘
2. visibility: hidden;     占据文档流  无法响应事件  重绘
3. opacity: 0;             占据文档流  响应事件      animation触发GPU加速模式不会重绘,否则会重绘
4. position:absolute;      脱离文档留  无法响应事件  回流重绘
5. clip-path:circle(50%);  占据文档流  无法响应事件  重绘


# 6. 谈谈你对BFC的理解
- 是什么
    块级格式化上下文，是页面中一个渲染区域，有一套属于自己的渲染规则

- 渲染规则
    1. BFC容器再计算高度时，浮动元素的高度也会计算在内
    2. BFC容器内的子元素的margin不会和外部的元素重叠
    3. 遵照从上往下从左往右的排列布局

- 触发条件
    1. overflow:不为visible
    2. float
    3. display:inline-block||flex||table-xxx ||grid
    4. position:flxed ||absolute

- 应用
    清除浮动

# 7. 水平居中垂直居中的方式有哪些？
- 已知宽高
    1. position:absolute + transform: translate(-50%,-50%) || margin 负值;
    2. position:absolute; left:0;right:0;top:0;bottom:0; margin: auto;
- 未知宽高(已知宽高也能用)
    2. display: flex; justify-content: center;align-items: center; 
    3. display: grid; justify-content: center;align-items: center; 
    4. display: table-cell; vertical-align: middle; text-align: center;

# 8. 三栏布局怎么实现
- 两栏布局
1. flex
2. grid
3. float + margin-left

- 三栏布局
1. flex
2. grid
3. 先加载左右内容 float + margin
4. 圣杯布局：float + margin负值 + position:relative
5. 双飞翼布局：float + margin负值 + box-sizing:border-box

# 9. 说说flexbox
- 是什么
    是一种布局方式，可以简便完整响应式地实现页面布局。容器中默认存在两条轴，主轴，交叉轴，默认x轴为主轴，可以用flex-direction来修改主轴的方向
- 特征
    1. 可以控制子元素在主轴跟交叉轴的对齐方式
    2. 可以控制子元素的缩放比例,排列方式

- 应用场景
    1. 一行多列布局
    2. 居中

# 10. css3新增了哪些属性?
1. 选择器: 属性选择器, 伪元素选择器
2. box-shadow
3. 裁剪: background-clip
4. transition (过渡动画)
5. transform (3D变换)
6. animation (动画)
7. 渐变色


# 11. css3中常见的动画有哪些？怎么实现?
1. transition : 控制容器属性变更时，控制变化的时间曲线
2. transform : 用于做容器的旋转、缩放、平移、倾斜、翻转等
3. animation : 控制容器动画的关键帧

# 12. 说说回流重绘
- 是什么
    回流:浏览器渲染页面之前需要对结构进行布局计算
    重绘:讲已经计算好布局的容器绘制出来

- 触发
    回流:页面上有容器的集合属性发生变更
    重绘:容器非集合属性变更 (字体,颜色)

    回流必定重绘,重绘不一定回流

# 13. 什么是响应式布局
- 是什么
    响应式布局是根据设备的尺寸来布局页面，让页面在不同设备上都有良好的视觉效果。

- 实现方案
1. flex(适应于某个容器内的响应式)
2. % (适用于外层大容器) ---- 继承父容器的大小
3. rem + 媒体查询  (可用于任何地方) ------ 虽然也要写多个媒体查询，但是每个媒体查询代码量少（只需控制根子体大小）
4. 媒体查询（可用于任何地方） ------ 代码量大（每个标签都要写）
5. vw/wh (适用于外层大容器) ----- 与%不同，相对于window大小


# 14. 视差滚动效果
- 是什么
    多层背景以不同速度进行移动，实现视觉上的落差

- 实现
1. background-attachment: fixed;
2. perspective + transitionZ

# 15. css画一个三角形

# 16. 如何显示一个小于10px的文字
目前最新版本的谷歌和edge浏览器都能显示任意大小
1. zoom: 0.25 用于元素或者页面的缩放 以前ie独有，现在只用火狐不支持
2. tansform: scale(0.25) 