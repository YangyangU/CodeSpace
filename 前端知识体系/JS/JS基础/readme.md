# 数据类型
1. number
2. string
3. boolean
4. undefined
5. null
6. symbol
7. bigint
8. object
9. array
10. function
11. date

# 存储位置
- 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

# 类型判断
1. typeof
能有效判断原始数据类型，除了null被判断成object
2. instanceof
只能正确判断引用数据类型，而不能判断基本数据类型，原型链中是否存在一个构造函数的 prototype 属性
3. constructor
一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。
4. Object.prototype.toString.call()
能判断所有数据类型，返回"[object 数据类型]"

## 为什么要用对象原型上的toString
- function类型返回内容为函数体的字符串
- Array类型返回元素组成的字符串
- 对象原型上的toString返回"[object 数据类型]"

## 判断数组的方法
1. Object.prototype.toString.call(obj).slice(8,-1) === 'Array';
2. obj.__proto__ === Array.prototype;
3. Array.isArrray(obj);
4. obj instanceof Array
5. Array.prototype.isPrototypeOf(obj)

## null和undefined区别
- undefined 代表的含义是未定义，null 代表的含义是空对象。
- 一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。
- == 返回 true ，=== 返回 false。

# 精度问题
计算机是通过二进制的方式存储数据的，所以计算机计算0.1+0.2的时候，实际上是计算的两个数的二进制的和，转成二进制就会变成无限循环的小数，再加上js会进行截断，所以会失去精度。
```js
function numberepsilon(arg1,arg2){                   
  return Math.abs(arg1 - arg2) < Number.EPSILON;        
}        
console.log(numberepsilon(0.1 + 0.2, 0.3)); // true
```