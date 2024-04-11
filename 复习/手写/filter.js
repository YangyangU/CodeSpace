function myFilter(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }