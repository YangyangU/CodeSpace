var citations = [3,0,6,1,5]

var hIndex = function(citations) {
    var len=citations.length;
    var h = citations[len-1];
    citations.sort(function(a,b){a-b})
    for(var i=0; i<len; i++) {

    }
};

console.log(hIndex(citations));