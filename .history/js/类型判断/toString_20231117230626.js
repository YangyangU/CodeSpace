console.log(
    Object.prototype.toString.call('hello')
);//'[object String]'

console.log(
    Object.prototype.toString.call(123)
);//'[object Number]'


console.log(
    Object.prototype.toString.call(undefined)
);//'[object Undefined]'

console.log(
    Object.prototype.toString.call(null)
);//'[object Null]'


var obj = {
    1:1
}
console.log(
    Object.prototype.toString.call(obj)
);//'[object Object]'

console.log(
    Object.prototype.toString.call(function() {})
);//'[object Function]'

let bigint = 123n
console.log(
    Object.prototype.toString.call(bigint)
);//'[object Function]'

var s ='oawdjoaw'
//判断对象是否为对应类型
function isType(s) {
    return Object.prototype.toString.call(s).slice(8,-1)
}

// if(isType === 'String'){

// }
console.log(
    isType(s) === 'String'
);
