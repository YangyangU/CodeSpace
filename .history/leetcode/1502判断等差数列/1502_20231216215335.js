
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>{a-b})
    for(var i=0;i<arr.length;i++){
        if(arr[i] - arr[i-1] === arr[i+1] - arr[i]){
        }
    }
};