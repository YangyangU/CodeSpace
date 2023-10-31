var citations = [3,0,6,1,5]

var hIndex = function(citations) {
    var len=citations.length;
    var h = citations[len-1];
    citations.sort(function(a,b){a-b})
    for(var i=len-1; i>0; i--) {
        if(citations[i]<h) {
            h--;
        }
    }
    return h;
};

console.log(hIndex(citations));