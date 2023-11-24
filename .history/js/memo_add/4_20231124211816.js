//动态规划
function fibonacci(n){
    if(n<2){
        return 1;
    }else{
        let array = []
        for (let i = 2; i < array.lengty; i++) {
            array[0] = 1
            array[1] = 1
            array[i] = array[i-1]+array[i-2]
            if(i==n){
                return array[n]
            }
        }
    }
    
}

console.log(fibonacci(4));