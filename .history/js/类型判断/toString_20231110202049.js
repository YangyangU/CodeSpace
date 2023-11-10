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

console.log(
    Object.prototype.toString.call(function() {})
);//'[Object Function]'
