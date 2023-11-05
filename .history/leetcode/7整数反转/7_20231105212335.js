x = 123

var reverse = function(x) {
    var res=[]
    if(x<0){
        res=x.toString().split('')
        var res1=res.reverse()
        res1.pop()
        res1.splice(0,0,'-')
        var res2=res1.join('')

        if(parseInt(res2)>-2^31){
            return res2
        }
        else{
            return 0;
        }
        
    }
    if(x>=0){
        res=x.toString().split('')
        var res1=res.reverse()
        var res2=res1.join('')
        if(parseInt(res2)<2^31-1){
            return res2
        }
        else{
            return 0;
        }
    }
};

console.log(reverse(x));