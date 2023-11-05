x = 123

var reverse = function(x) {
    var res=[]
    if(x<0){
        res=x.toString().split('')
        var res1=res.reverse()
        res1.pop()
        res1.splice(0,0,'-')
        var res2=res1.join('')
        return res2
    }
    if(x>=0){
        res=x.split('')
        var res1=res.reverse()
        var res2=res1.join('')
        return res2
    }
};

console.log(reverse(x));