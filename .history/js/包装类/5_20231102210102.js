//包装类


// var obj ={}
// console.log(obj.a);//undefined

//原始值是不能拥有属性和方法
// var num = 123;
// num.abc = 'hello'
// console.log(num.abc);//undefined


// var num = new Number(123);//创造原始值的另一个方式
// num.abc = 'hello'
// console.log(num.abc);//hello
// console.log(num * 2);//246  //当参与四则运算v8将它看成数字


// var str = 'abcd'
// console.log(str.length);


// var num = 4
// num.len = 3 //引发

// var num = new Number(4)
// num.len = 3  //发现num为原始值，delete num.len 
// delete num.len

// console.log(num.len);//执行时又new Number(4).len
//访问的时候创建了，又移除了，所以报undefined
//这样执行的过程叫隐式包装类


//考点
var arr = [1,2,3,4,5]
arr.length = 2

console.log(arr);

var str = 'abcd'
str.length = 2//没用//v8上头，str.length = 2 => new String('abcd').length = 2 delete
console.log(str.length);