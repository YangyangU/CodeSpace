# 盒模型
## 标准盒模型
box-sizing: content-box;
width = content
## IE盒模型
box-sizing: border-box;
width = content + padding + border

# 定位
position: relative;
position: absolute; 相对于父容器
position: fixed; 屏幕视⼝
position: sticky; 先relative后fixed

# CSS选择器优先级
!important > 内联样式 > id选择器 > class选择器 > 标签选择器 > 通配符选择器

# 水平垂直居中
1. flex布局
display: flex;
justify-content: center;
align-items: center;
2. 绝对定位
- 
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
- 
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
3. grid布局
display: grid;
place-items: center;
4. 行内块元素
display: inline-block;
vertical-align: middle;

# 三栏布局
1. flex布局
父容器display: flex;
左右设置宽度，中间flex: 1;
2. grid布局
display: grid;
grid-template-columns: 1fr 1fr 1fr;
3. float布局
左右浮动
中间设置margin
4. 绝对定位
position: relative;
top: 0;
right: 0;
bottom: 0
left: 0;
## 圣杯布局
1. 全部浮动
2. 相对定位 + padding 解决内容被挡问题
## 双飞翼布局
1. 全部浮动
2. 中间多一层div + margin 解决内容被挡问题

# 动画
transition（过度）	用于设置元素的样式过度，和animation有着类似的效果，但细节上有很大的不同
transform（变形）	用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系，就相当于color一样用来设置元素的“外表”
animation（动画）	用于设置动画属性，他是一个简写的属性，包含6个属性

# CSS单位
1. px
2. em
3. rem
4. vw
5. vh
6. %

# 隐藏元素的方法
opacity: 0;
display: none;
visibility: hidden;
position: absolute;
transform: scale(0);//缩放
clip-path: circle(0);//裁剪
z-index: -1;

# flex
- flex-direction 主轴的方向
- flex-wrap 是否换行
- justify-content 主轴的对齐方式
- align-items 交叉轴的对齐方式
- align-content 多根轴线的对齐方式
- flex-grow 放大比例
- flex-shrink 缩小比例
- flex-basis 项目占据的主轴空间
- order 定义项目的排列顺序

# CSS预处理器/后处理器
CSS预处理器的作用：

变量和常量：引入变量和常量的概念，可以在CSS中定义和复用值，提高代码的可维护性和重用性。
嵌套规则：允许样式规则嵌套在父规则内部，提高样式的可读性和可维护性，减少选择器的重复书写。
混合（Mixin）：定义一组样式规则，然后在需要的地方进行重用，减少代码的冗余，提高开发效率。
继承：允许样式规则从其他规则中继承属性和值，减少重复的样式声明。
运算和函数：支持对样式值进行数学运算、逻辑操作或自定义处理，增强样式的灵活性和动态性。
导入和模块化：允许将多个CSS文件合并为一个，或者将样式分为模块，方便管理和组织代码。

CSS后处理器的作用：

自动生成浏览器前缀：根据指定的浏览器兼容性要求，在生成的CSS中自动添加适当的浏览器前缀，简化编写兼容性代码的过程。
CSS代码优化和压缩：对CSS代码进行优化和压缩，包括删除空白字符、合并规则、优化值等，减小文件大小和提升加载速度。
静态类型检查：通过静态类型检查工具，如TypeScript或Flow，可以对CSS代码进行类型检查，减少潜在的错误和调试时间。
自动化工具集成：与构建工具（如Webpack、Gulp等）结合使用，通过插件系统实现自动化任务，如自动雪碧图、样式合并等。


# 减少回流重绘
如果想设定元素的样式，通过改变元素的 class 类名 (尽可能在 DOM 树的最里层)
避免设置多项内联样式
应用元素的动画，使用 position 属性的 fixed 值或 absolute 值(如前文示例所提)
避免使用 table 布局，table 中每个元素的大小以及内容的改动，都会导致整个 table 的重新计算
对于那些复杂的动画，对其设置 position: fixed/absolute，尽可能地使元素脱离文档流，从而减少对其他元素的影响
使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘
避免使用 CSS 的 JavaScript 表达式