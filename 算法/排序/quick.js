//用的最多  分治法

//选择一个基准元素（pivot），将数组分成两个子数组，小于基准的元素放在基准的左边，
//大于基准的元素放在右边。对左右子数组分别进行递归快速排序。

let arr = [5,1,3,6,2,4,7]

function quickSort(arr){
    if(arr.length <= 1) return arr
    const len = arr.length
    const base = arr[0]
    let left = [],right = []
    for (let i = 1; i < len; i++){
        if (arr[i]<base){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return  [...quickSort(left),base,...quickSort(right)]
}


console.log(quickSort(arr));