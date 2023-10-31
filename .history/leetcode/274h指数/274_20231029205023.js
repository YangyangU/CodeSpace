var citations = [3,0,6,1,5]

var hIndex = function(citations) {
    var len=citations.length;
    var h = 0
    citations.sort(function(a,b){b-a})
    for(var i=0; i>len; i++) {
        if (citations[i] >= len - i) {
            h = len - i;
        } else {
            break;
        }
    }
    return h;
};

console.log(hIndex(citations));