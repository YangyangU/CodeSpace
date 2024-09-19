# 函数作为参数传递

```js
function operation(num1, num2, callback) {
    let result = callback(num1, num2);
    console.log(result);
}

function add(num1, num2) {
    return num1 + num2;
}

operation(2, 3, add); // 输出 5
```

# 函数作为返回值
```js
function multiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

let multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5)); // 输出 10
```

# 函数柯里化
```js
function curry(fn) {
  // 获取函数参数的长度
  const arity = fn.length;
  
  return function curried(...args) {
    // 如果传入的参数数量 >= 函数定义的参数长度，则执行函数
    if (args.length >= arity) {
      return fn(...args);
    } 
    // 否则返回一个函数，继续接受剩余的参数
    else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

console.log(curry(add)(1)(2)(3)); // 输出 6
```