let arr = [2,3,1,4,5]

arr.sort((a,b)=>{a-b})//js自带的api

console.log(arr);


//如果没有sort

//每遍历一个，就拿他跟后面所有的比较

// function bubbleSort(){
//     const len = arr.length;
//     for(let i=0; i<len; i++){
//         for(let j=i+1; j<len; j++){
//             if(arr[i]>arr[j]){
//                 // let temp = arr[i];
//                 // arr[i] = arr[j];
//                 // arr[j] = temp;
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//         }
//     }
//     return arr
// }

function bubbleSort(arr){
    let res = []
    while(arr.length){
        res.push(getMin(arr))
        arr.splice(arr.indexOf(getMin(arr)), 1)
    }
    return res
}

function getMin(array){
    let min = Infinity;
    for(let i=0; i<array.length; i++){
        if(array[i]<min){
            min = array[i];
        }
    }
}