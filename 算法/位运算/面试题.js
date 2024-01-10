//如何实现一个高效率的证书乘法和除法

function multiply(x, y) {
    let res = 0 
    while(y > 0){
        if(y&1){//y的最低位是不是1
            res += x
        }
        x = x << 1
        y = y >> 1
    }
    return res
}

console.log(multiply(5,3));


function divide(){
    let res = 0
    while(y>0){
        if(y&1){

        }
        x = x << 1
        y = y >> 1
    }
    return res
}

console.log(divide(15,3));

// 00001111
// 00000011