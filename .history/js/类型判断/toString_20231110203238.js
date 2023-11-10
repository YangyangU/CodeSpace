console.log(
    Object.prototype.toString.call('hello')
);//'[Object String]'

console.log(
    Object.prototype.toString.call(123)
);//'[Object Number]'


console.log(
    Object.prototype.toString.call(undefined)
);//'[Object Undefined]'

console.log(
    Object.prototype.toString.call(null)
);//'[Object Null]'


var obj = {
    1:1
}
console.log(
    Object.prototype.toString.call(obj)
);//'[Object Object]'

console.log(
    Object.prototype.toString.call(function() {})
);//'[Object Function]'


//判断对象是否为对应类型
// function isType(s) {
//     return Object.prototype.toString.call(s).slice(8,-1)
// }

// if(isType(s) === 'String'){

// }