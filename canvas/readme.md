# 基本使用

1. 获取 canvas 上下文对象

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

2. 设置 canvas 属性

```js
context.strokeStyle = "red";
context.lineWidth = 6;
```

3. 使用 Canvas 绘制图形

- 绘制路径

```js
// 从 (x1, y1) 点到 (x2, y2) 点绘制一条线
context.beginPath();
context.moveTo(x1, y1);
context.lineTo(x2, y2);
context.stroke();
```

- 绘制矩形

```js
// 从 (x, y) 点绘制一个宽为 width 高为 height 的矩形
context.rect(x, y, width, height);
context.stroke();
```

- 绘制圆形

```js
context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
context.stroke();
```

- 绘制图片

```js
const image = new Image();
image.src = "html5.png";
image.onload = function () {
  context.drawImage(image, x, y);
};
```

4. 结束时清除 Canvas

```js
context.clearRect(0, 0, canvas.width, canvas.height);
```