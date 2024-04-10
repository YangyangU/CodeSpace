function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const map = new Map();
    for(let item of arr1){
        map.set(item, (map.get(item) || 0) + 1)
    }
    for(let item of arr2){
        if(!map.has(item) || map.get(item) <= 0){
            return false;
        }
        map.set(item, map.get(item) - 1);
    }
    return true;
}