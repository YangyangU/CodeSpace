
var hammingWeight = function(n) {
    var count = 0;
    for(var i=0; i<32; i++){
        if(n.toString()[i] === '1'){
            count++;
        }
    }
    return count;
};