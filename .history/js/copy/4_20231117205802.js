let obj = {
    name:'阳阳',
    age:18,
    like:{
        type:'coding'
    }
}

let newObj = JSON.parse(JSON.stringify(obj))//将obj转化为字符串，在将字符串转换为对象