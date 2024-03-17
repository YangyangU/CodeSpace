let arr = [1, 2, '2', 3, 1, 2,
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 2 } }
]

// let arr2 = [1,2,1,2,2]
// let arr3 = new Set(arr2)//Set(2) { 1, 2 }

// let newArr = [...new Set(arr)]

// console.log(newArr);

// let arr2 = arr.map((item)=>{
//     return JSON.stringify(item);
// })

// let newArr = new Set(arr2)
// newArr = Array.from(newArr).map((item)=>{
//     return JSON.parse(item)
// })
// console.log(newArr);
 
function uniqueArr(arr){
    let res = []
    for(let item of arr){
        let isFind = false
        
        for(let resItem of res){
            if(equal(item,resItem)){
                isFind = true
                break;
            }
        }
        if(!isFind){
            res.push(item)
        }
    }
    return res
}

function equal(v1,v2){//判断这两个对象是否相等
    if((typeof v1 === 'object' && v1 !== null)&&(typeof v2 === 'object' && v2 !== null)){
        if(Object.keys(v1).length !== Object.keys(v2).length) return false;
        for(let key in v1){
            if(key in v2){
                if(!equal(v1[key],v2[key])){
                    return false
                }
            }else{
                return false
            }
        }
        return true
    }else{
        return v1 === v2
    }
}

console.log(uniqueArr(arr));