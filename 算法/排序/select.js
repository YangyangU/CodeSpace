let arr = [5,3,2,4,1]

function selectSort(arr){
    const len = arr.length
    let i = 0 ,j = len - 1
    while(i < j){
        getMin(i,j,arr)
    }
}

function getMin(left,right,arr){
    let min = left
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}