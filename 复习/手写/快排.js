let arr = [1, 2, 7, 9, 4, 3, 5, 7, 9]

function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let mid = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < mid){
      left.push(arr[i] )
    }
    if(arr[i]  >= mid){
      right.push(arr[i] )
    }
  }
  return quickSort(left).concat([mid],quickSort(right))
}

console.log(quickSort(arr));