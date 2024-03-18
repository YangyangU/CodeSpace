# 1. 如何判断一个对象上是否存在属性？

    1. return obj[key] !== undefined
        缺点：不能判断属性值为undefined
    2. return Object.keys(obj).includes(key)
        缺点：不能判断不可枚举的属性
    3. return obj.hasOwnProperty(key)
        缺点：不能判断隐式具有的属性
    4. return key in obj

# 2. 如何做大整数相加？
2**53
转字符串，短的补零，从右往左加，carry/10 判断进位 结果用字符串拼接

# 3. 数组去重
    1. Set  ===判断
        只能用作于判断原始数据类型，引用数据类型不能判断
    2. 对每一项  先JSON.stringify()  再JSON.parse()

    3. 手敲一个

# 4. 让代码成立

for of 只能遍历具有可迭代对象
for in 会遍历到原型

Object.keys(obj)//返回一个数组存key
Object.values(obj)//返回一个数组存value

- 打造一个迭代器

# 5. js中如何实现并发任务的控制

定时器是浏览器的方法，不是js的方法，单线程不能并发