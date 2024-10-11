## globalThis

浏览器为 window
node 为 global

## __filename

当前文件路径

## __dirname

当前文件所在目录路径

## process

进程对象

- env

获取当前执行环境的环境变量 (对象形式)。

## Buffer

二进制数据流

### 创建buffer对象

```js
const buf = Buffer.alloc(10); // 创建一个大小为 10 的 Buffer 对象，默认会用 0 填充
const buf2 = Buffer.from('Hello, world!'); // 创建一个包含字符串 'Hello, world!' 的 Buffer 对象
const buf3 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]); // 内容为hello构成的16进制数组 Buffer 对象 
```

### 转换内容格式

```js
const buf = Buffer.from('Hello, world!');
// 转为字符串输出
console.log(buf.toString()); // 输出 'Hello, world!'

// 转为16进制字符串输出
console.log(buf.toString('hex')); // '48656c6c6f2c20776f726c6421'（对应的是 'Hello, world!' 的 ASCII 码）

// 转为数组输出
console.log(Array.from(buf)); //[
//    72, 101, 108, 108, 111,
//    44,  32, 119, 111, 114,
//   108, 100,  33
// ]

// 转为base64格式输出
console.log(buf.toString('base64')); //'SGVsbG8sIHdvcmxkIQ=='
```
### 写入内容

```js
// 创建一个长度为 10 的 Buffer 实例并将它填充为 0
const buf = Buffer.alloc(10);

// 将字符串 'Hello' 写入 Buffer 实例的前 5 个字节
buf.write('Hello');

// 将字符串 'world' 写入 Buffer 实例的第 6 个字节开始的位置，由于 'world' 的长度为 5，所以不会覆盖掉之前写入的 'Hello'
buf.write('world', 5); 

// 将 Buffer 实例转换为字符串并输出 'Hello world'
console.log(buf.toString()); 
```

### 合并

```js
const buf3 = Buffer.concat([buf1, buf2]);
```

### 截取

```js
const buf2 = buf.slice(0, 5);
```