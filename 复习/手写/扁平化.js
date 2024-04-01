let arr = [1,[2,[3,[4]]]]

function flatArray(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flatArray(val)) : acc.concat(val);
  }, []);
}

function flatArray2(arr){
    return arr.flat(Infinity);
}

function flatArray3(arr){
    return arr.join(',').split(',').map(Number);
}

function flatArray4(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}

function flatArray5(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatArray5(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatArray5(arr)); // 输出: [ 1, 2, 3, 4 ]