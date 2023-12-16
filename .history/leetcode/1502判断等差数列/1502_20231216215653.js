
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b)
    console.log(arr);
    let cha = arr[1]- arr[0]
    for(var i=0;i<arr.length;i++){
        if(arr[i] - arr[i-1] != cha){
            return false
        }
    }
    return true
};

canMakeArithmeticProgression()