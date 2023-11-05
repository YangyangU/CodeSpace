x = 123

var reverse = function(x) {
    var res=[]
    if(x<0){
        res=x.split('')
        var res1=res.reverse()
        res1.pop()
        res1.splice(0,0,'-')
        var res2=res1.join('')
        return res2
    }
    if(x>0){
        var res3=x.split('').reverse().join()
        return res3
    }
    if(x < -2^31 || x > 2^31-1) return 0
    else{

    }
};

console.log(reverse(x));