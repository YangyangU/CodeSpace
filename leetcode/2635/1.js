var map = function(arr, fn) {
    for (var i = 0; i < arr.length; i++){
        arr[i] = fn(arr[i],i);
    }
    return arr;
};