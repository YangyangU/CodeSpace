var gifts=[25,64,9,4,100];
var k = 4;

var pickGifts = function(gifts, k) {
    if(gifts.length == 0){return 0;}
    var max = 0;
    var sum = 0;
    for(let i = 0; i < k; i++) {
        gifts.sort((a, b)=>b-a)
        max = gifts[i]
        gifts[i]=Math.floor(Math.sqrt(max));
        i--;
        k--;

    }
    for(let i = 0; i < gifts.length; i++) {
        sum+=gifts[i];
    }
    return sum
        
    
};

console.log(pickGifts(gifts, k));
