let arr1 = [1,2,4,7] 
let arr2 = [3,6,9]

const mergeArrays = (arr1, arr2) => {
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort((a,b) => a - b);
    return mergedArray;
}

console.log(mergeArrays(arr1, arr2));