# 定义
this 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象

## 显式绑定

apply()
call()
bind()

## 隐式绑定
函数还可以作为某个对象的方法调用，这时this就指这个上级对象

```js
js
function test() {
  console.log(this.x);
}

var obj = {};
obj.x = 1;
obj.m = test;

obj.m(); // 1
```
这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象

```js
var o = {
    a:10,
    b:{
        fn:function(){
            console.log(this.a); //undefined
        }
    }
}
o.b.fn();
```
上述代码中，this的上一级对象为b，b内部并没有a变量的定义，所以输出undefined

这里再举一种特殊情况

```js
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j = o.b.fn;
j();
```
此时this指向的是window，这里的大家需要记住，this永远指向的是最后调用它的对象，虽然fn是对象b的方法，但是fn赋值给j时候并没有执行，所以最终指向window


## new绑定
```js
function test() {
　this.x = 1;
}

var obj = new test();
obj.x // 1
```

new过程遇到return一个对象，此时this指向为返回的对象
```js
function fn()  
{  
    this.user = 'xxx';  
    return {};  
}
var a = new fn();  
console.log(a.user); //undefined
```

## 箭头函数
```js
const obj = {
  sayThis: () => {
    console.log(this);
  }
};

obj.sayThis(); // window 因为 JavaScript 没有块作用域，所以在定义 sayThis 的时候，里面的 this 就绑到 window 上去了
const globalSay = obj.sayThis;
globalSay(); // window 浏览器中的 global 对象
```

## 优先级
new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级