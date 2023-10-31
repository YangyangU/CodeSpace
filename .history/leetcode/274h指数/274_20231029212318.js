var citations = [3,0,6,1,5]

var hIndex = function(citations) {
    var len=citations.length;
    var h = len;
    citations.sort(function(a,b){a-b})
    for(var i=0; i>len-1; i++) {
        if (citations[i] < h) {
            var count=h-1;
            if (count!=h){
                h--;
            }
        }
    }
    return h;
};

console.log(hIndex(citations));