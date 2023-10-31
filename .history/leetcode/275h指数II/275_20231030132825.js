citations = [0,1,3,5,6]

var hIndex = function(citations) {
    len=citations.length;
    h=0;
    while(h<len){
        if(citations[h]>=h){
            h=h+1;
        }
    }
    return h;
};

console.log(hIndex(citations));