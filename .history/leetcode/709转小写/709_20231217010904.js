
//api
var toLowerCase = function(s) {
    return s.toLowerCase()
};

//用ASCII手写 A65 Z90 小写加32
var toLowerCase = function(s) {
    let arr = []
    for(var ch of s){
        if(ch.charCodeAt()>=65 && ch.charCodeAt()<=90){
            ch = String.fromCharCode(ch.charCodeAt() + 32);
        }
        arr.push(ch);
    }   
    return arr.join('')
}
