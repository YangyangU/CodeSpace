var gifts=[25,64,9,4,100];
var k = 4;

var pickGifts = function(gifts, k) {
    var max = 0;
    console.log(max);
    for (var i = 0; i < gifts.length; i++){
        if(gifts[i] > max){
            max = gifts[i];
        }
    }
};
pickGifts(gifts, k)
