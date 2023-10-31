var citations = [3,0,6,1,5]

var hIndex = function(citations) {
    var len=citations.length;
    var h = len;
    for(var i=0; i<len; i++) {
        var count=0;
        for(var j=0; j<len; j++) {
            if (citations[j] >= h) {
                count++;
            }
        }
        if (count>=h){
            return h;
        }
        else{
            h--;
        }
    }
    return h;
};

console.log(hIndex(citations));