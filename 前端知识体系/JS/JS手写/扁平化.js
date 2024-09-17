const flatArr = (arr) =>{
    if(!Array.isArray(arr)) return
    const newArr = []
    for(let item of arr){
        if(Array.isArray(item)){
            return newArr.concat(flatArr(item))
        }else{
            newArr.push(item)
        }
    }
    return newArr
}

const arr = [1,[1,[1,[1]]]]
console.log(flatArr(arr));
