## 区别

1. CJS 支持动态加载模块，ESM 会在所有模块都加载完毕后才执行代码

2. ESM 导入的是值的引用，而 CJS 导入的是值的拷贝。

3. 通过 package.json 中 "type":"module" 区分模块类型；或者.cjs 和.mjs 