const quickSort = (arr) => {
    if(!Array.isArray(arr)) return
    if(arr.length <= 1) return arr
    let left = []
    let right = []
    let mid = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < mid){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([mid],quickSort(right))
}

console.log(quickSort([3,2,1,5,6,4]))
