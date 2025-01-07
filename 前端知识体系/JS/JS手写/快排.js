const quickSort = (arr) =>{
    if(arr.length <= 1) return arr
    let left  = []
    let right = []
    let mid = arr[0]
    for(let i=1;i<=arr.length -1;i++){
        if(mid < arr[i]){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return quickSort1(left).concat([mid],quickSort1(right))
}

const quickSort1 = (arr) =>{
    if(arr.length <= 1) return arr
    let left = []
    let right = []
    let mid = arr[0]
    for(let i =1;i< arr.length;i++){
        if(mid <= arr[i]){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return quickSort1(left).concat([mid],quickSort1(right))
}

console.log(quickSort1([3,2,1,5,6,4]))
