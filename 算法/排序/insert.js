let arr =[5,3,2,4,1]

//将当前遍历到的元素插入到已排好序的队伍中

function insertSort(arr){
    const len = arr.length
    let temp
    for (let i = 1; i < len; i++) {
        temp = arr[i]
        let j = i
        while(j> 0 && arr[j - 1]>temp){
            arr[j] = arr[j - 1]
            j--
        }
        arr[j] = temp
    }
    return arr
}