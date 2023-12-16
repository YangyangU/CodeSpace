arr = [3,5,1]

var canMakeArithmeticProgression = function(arr) {
    arr.sort()
    // console.log(arr);
    // let cha = arr- arr[0]
    for(var i=0;i<arr.length;i++){
        if(arr[i] - arr[i-1] != cha){
            return false
        }
    }
    return true
};

canMakeArithmeticProgression()