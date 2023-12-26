const util = require('util');

const obj = {
    a:1,
    b:{
        c:2,
        d:[3,4,5],
        e:()=>{
            console.log(6);
        }
    }
}

// console.log(util.inspect(obj));//将对象转换成字符串
// console.log(util.inspect(obj,{depth:1}));//控制展开的层级  第二层的就展不开
// console.log(util.inspect(obj,{depth:Infinity}));

console.log(util.format('%s:%s','foo','bar'));//格式化  类似于c
console.log(util.format('%d:%d','foo','bar'));//格式化  类似于c