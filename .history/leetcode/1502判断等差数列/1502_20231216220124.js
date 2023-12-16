arr = [3,5,1]

var canMakeArithmeticProgression = function(arr) {
    arr.sort()
    // console.log(arr);
    let cha = arr[1] - arr[0]
    for(var i=0;i<arr.length+1;i++){
        if(arr[i + 1] - arr[i] != cha){
            return false
        }
    }
    return true
};

canMakeArithmeticProgression()