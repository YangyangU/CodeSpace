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

# 5. 说说js深浅拷贝
调用栈，维护各个作用域的引用关系
全局执行上下文，变量环境（var），词法环境（let，const）

- 是什么
拷贝指的是将一个对象中的元素复制到一个新的对象中，拷贝又分为浅拷贝和深拷贝，浅拷贝只拷贝对象的引用地址，深拷贝会层层拷贝

- 浅拷贝常见方法:
    1. Object.assign
    2. 解构
    3. concat
    4. slice

- 深拷贝常见的方法:
    1. JSON.parse(JSON.stringify()) --- 不能拷贝symbol和function和undefined和null和bigint,以及循环引用
    2. structuredClone --- 不能拷贝 Symbol function

- 函数的拷贝
    return new Function(`return ${fn}.call(this)`)

- 手写拷贝
    1. 递归
    2. 管道通讯


# 6. 说说你对闭包的理解
- 是什么
    根据词法作用域的规则，内部函数一定能访问外部函数的变量，当内部函数对外部函数中的变量存在引用，且被提到外部函数之外调用，即使外部函数执行完毕，它的执行上下文也无法被完全销毁，而是会将内部函数引用的变量作为一个集合保留下来保留在调用栈中，该集合被称为闭包

- 作用
    1. 定义私有变量
    2. 封装模块
    3. 延长变量的生命周期

- 缺点
    内存泄露
    （使用完将变量置空，垃圾回收机制自动清除。垃圾回收机制不会管弱引用，而会在无引用时立即清除）

# 7. 说说原型
- 是什么
    原型是一个对象，分为隐式原型和显式原型，隐式原型是对象上的__proto__属性，显式原型是函数上的Prototype属性，当我们要访问一个对象的属性时，js引擎不仅会在对象上查找，还会查找对象的隐式原型，顺着隐式原型层层往上找，直到找到null。对象的隐式原型等于创建该对象的构造函数的显式原型
    这样的查找关系就是原型链

- function.__proto__ === Function.prototype ? 箭头函数除外

- Object.create(null)没有原型
    
# 8. js中如何实现继承
    1. 原型链继承
    缺点：
        1. 各个实例之间共用一个原型对象，属性会相互影响
        2. 子类无法给父类传参
    
    2. 构造函数继承
    缺点：
        1. 无法继承父类的原型上的属性

    3. 组合继承（经典继承）
    缺点：
        1. 在实现继承过程中重复调用了两次父类的构造函数

    4. 原型式继承Object.create()
    缺点：
        1. 多个对象共用一个原型对象，属性会相互影响

    5. 寄生组合继承
    缺点：
        1. 调用了两次父类的构造函数

    6. ES6的class继承

# 9. 说说你对this的理解
- 是什么
    this是函数中的一个关键词，用于代表函数作用域的指向
- 绑定规则
1. 默认绑定 --- 函数在哪个词法作用域中生效，this就指向哪个词法作用域，词法作用域要找到底
2. 隐式绑定 --- 当函数被一个对象拥有且调用，this指向该对象
3. 隐式丢失 --- 多个对象链式调用函数，this指向最近的对象，就近原则
4. 显式绑定 --- call（零散） apply（接受数组） bind（接受this指向的对象，return一个函数）
5. new绑定 --- this 指向实例对象

- 箭头函数
1. 语法简洁，只能声明匿名函数
2. `this`指向不同，箭头函数的`this`指向外部函数的`this`
3. 不能使用`new`关键字，没有原型 `prototype`，不能当成一个构造函数
4. 没有自己的 `arguments`，为外层函数的 `arguments`，如果为全局则没有