## 使用 ESM

默认情况下 Node.js 会将 .js 后缀文件识别为 CJS 模块。

1. 使用 .mjs 作为文件后缀名
2. package.json 中 type 字段设置为 module

## 默认导入导出

```js
import defaultModule from './export_default.js'

export default {
  hello(name) {
    console.log(`Hello, ${name}!`);
  },
  byebye(name) {
    console.log(`byebye, ${name}!`);
  },
  userInfo: {
    name: "forever",
    age: 18,
  },
};
```

## 具名导入导出

```js
import { hello } from './export_named.js'

export function hello(name) {
  console.log(`Hello, ${name}!`)
}
```

## 全部导入导出

```js
import * as xx from './export_all.js'

export * from './exp'
```
