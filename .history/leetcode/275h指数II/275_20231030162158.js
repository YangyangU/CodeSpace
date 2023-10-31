citations = [0,1,3,5,6]

var hIndex = function(citations) {
    i=citations.length-1;
    h=0;
    while(i>=0&&citations[i]>h){
        i--;
        h++;
    }
    return h;
};

console.log(hIndex(citations));