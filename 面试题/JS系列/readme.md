# 1. js数组方法有哪些？
1. 增: push  unshift  splice  concat
2. 删: pop  shift  splice  slice
3. 改: reverse  sort
4. 查: indexOf  lastIndexOf  includes  find
5. 遍历: forEach  map  filter  every  some  reduce
6. 转换: join


- forEach map 区别
1. map会返回一个新的数组
2. return 无法终止forEach的循环，forEach不能break，continue


# 2. 字符串有哪些方法?
1. 增: concat  padEnd  padStart
2. 删: slice  substring  substr
3. 改: replace  repeat  trim  trimLeft  trimRight
4. 转换: charCodeAt  split


# 3. == 和 === 区别
 === 全等严格相等，要判断类型与值

- 三种toString()
 {}.toString()
 [].toString()
 xx.toString()


# 4. 说说js中的类型转换
- 是什么
- 原始类型和引用数据类型
    1. 开发中通常需要将一个类型转换为另一个类型时通过调用构造函数实现类型转换
    2. 当开发中碰到 比较运算符 或者算数运算符时，当符号两边的类型不一致是，js引擎会自动进行类型转