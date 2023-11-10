//判断类型
console.log(typeof str)//string
console.log(typeof num)//number
console.log(typeof flag)//boolean
console.log(typeof und)//undefined
console.log(typeof nu)//object  一个bug
console.log(typeof big)//bigint
console.log(typeof s)//symbol


console.log(typeof obj)//object
console.log(typeof arr)//object
console.log(typeof fn)//function
console.log(typeof date)//object


console.log(obj instanceof Object);//obj隶属于Object true
console.log(arr instanceof Array);//arr隶属于Array true
console.log(fn instanceof Function);//fn隶属于Function true
console.log(date instanceof Date);//date隶属于Date true

console.log(str instanceof String);// false 不能判断原始类型

console.log(arr instanceof Object);//arr隶属于Object true


function test(obj){
    if (obj instanceof Object){
        return obj.name
    }
}
console.log(test({name:'小子'}));
console.log(test(['小子']));//进去了
