var gifts=[25,64,9,4,100];
var k = 4;

var pickGifts = function(gifts, k) {
    var max = 0;
    gifts.sort((a, b)=>b-a)
    max=gifts[0]
    console.log(max);
};
pickGifts(gifts, k)
