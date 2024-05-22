// function isEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     const map = new Map();
//     for(let item of arr1){
//         map.set(item, (map.get(item) || 0) + 1)
//     }
//     for(let item of arr2){
//         if(!map.has(item) || map.get(item) <= 0){
//             return false;
//         }
//         map.set(item, map.get(item) - 1);
//     }
//     return true;
// }

function isEqual(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let map = new Map()
    for(let item of arr1){
        if(!map.has(item)){
            map.set(item,1)
        }else{
            map.set(item,map.get(item) + 1)
        }
    }
    for(let item of arr2){
        if(!map.has(item)){
            return false
        }else if(map.get(item) <= 0){
            return false
        }else{
            map.set(item,map.get(item - 1))
        }
    }
    return true
}

let arr1 = [1,2,3,4]

let arr2 = [1,2,3,4]

console.log(isEqual(arr1,arr2));