// let obj = {
//     name:'阳阳',
//     age:18,
//     like:{
//         type:'coding'
//     }
// }
// let newObj = JSON.stringify(obj)//将obj转化为字符串
// let newObj2 = JSON.parse(JSON.stringify(obj))//将obj转化为字符串，在将字符串转换为对象

// obj.like,type = 'doing'//改变址 新对象不变  深拷贝

// console.log(newObj);
// console.log(newObj2);


let obj = {
    name:'阳阳',
    age:18,
    like:{
        type:'coding'
    },
    a:undefined,
    b:null,
    c:function(){},
    d:{
        n:100
    },
    e:Symbol('hello'),
}

// obj.c = obj.d
// obj.d.m = obj.c

let newObj = JSON.parse(JSON.stringify(obj))


console.log(newObj);