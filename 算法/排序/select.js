let arr = [5,3,2,4,1]

//选择未遍历的元素最小值，放到数组的前面
function selectSort(arr){
    const len = arr.length 
    let minIndex ;
    for (let i = 0; i < len-1; i++){
        minIndex = i
        
        for (let j = 0; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if (minIndex !== i){
            [arr[i],arr[minIndex]] =[arr[minIndex],arr[i]]
        }
    }
    return arr
}