let arr = ['a', 'b', 'c']

for(var i = 0; i < arr.length; i++){//什么都能遍历

}

let obj = {
    a:1,
    b:2,
    c:3
}


for(let item of arr){//只能循环具有迭代器属性的数据结构
    console.log(item);
}