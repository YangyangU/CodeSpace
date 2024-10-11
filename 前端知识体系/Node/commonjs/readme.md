## 导出

exports 实际上是 module.exports 的一个引用，当我们使用 exports 导出模块代码时，实际上是在向 module.exports 添加属性

如果我们对 exports 进行重新赋值，就会打破这个关系

```js
// 定义一个名为 "exports" 的函数
// 函数中将 "Hello World!" 的信息输出到控制台中
exports = function () {
  console.log("Hello World!");
};
```

建议在写 Node.js 模块时，只使用 module.exports 导出模块代码

## 导入

### 完整导入
const context = require('./exports')

### 解构导入
const { hello, userInfo, byebye } = require('./exports')
